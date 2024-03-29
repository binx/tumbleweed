const app = require("./index.js");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Email = require("email-templates");
const mailjetTransport = require("nodemailer-mailjet-transport");

app.use(bodyParser.json());
const config = require("../src/assets/store_config.json");

const transporter = nodemailer.createTransport(
  mailjetTransport({
    auth: {
      apiKey: process.env.MAILJET_APIKEY_PUBLIC,
      apiSecret: process.env.MAILJET_APIKEY_PRIVATE,
    },
  })
);

const email = new Email({
  message: {
    from: process.env.EMAIL_FROM,
  },
  send: true,
  views: {
    options: {
      extension: "hbs",
    },
  },
  transport: transporter,
});

function sendEmail(status, items) {
  console.log(items);

  let displayItems = items.map((o) => {
    o.displayAmount = o.price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return o;
  });
  const time = new Date();
  // const shipIndex = items.findIndex(
  //   (i) => i.description === "Flat-Rate Shipping"
  // );
  let shipping_cost = "FREE";
  // if (shipIndex !== -1) {
  //   shipping_cost = order.items[shipIndex].displayAmount;
  //   items.splice(shipIndex, 1);
  // }
  email
    .send({
      template: status,
      message: {
        to: order.email,
      },
      locals: {
        order: order,
        order_id: order.id.split("_")[1],
        order_subtotal: items
          .reduce((a, b) => a + b.amount, 0)
          .toLocaleString("en-US", { style: "currency", currency: "USD" }),
        order_total: (order.amount / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        order_date: `${time.getMonth()}/${time.getDate()}/${time.getFullYear()}`,
        shipping_cost,
        items,
        config,
      },
    })
    .then(console.log)
    .catch(console.error);
}

const calculateOrderAmount = (items) => {
  return items.reduce((a, b) => a + b.price, 0) * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items, email } = req.body;

  // sendEmail("Ordered", items);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    receipt_email: email,
    metadata: {
      email: email,
      items: JSON.stringify(
        items.map((i) => ({
          name: i.name,
          price_id: i.price_id,
          quantity: i.quantity,
        }))
      ),
    },
    payment_method_types: ["card"],
  });

  res.send({
    client_secret: paymentIntent.client_secret,
  });
});

app.post("/order/update", function (req, res) {
  stripe.orders.update(
    req.body.id,
    { metadata: { status: req.body.status } },
    (err, order) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(order);
      sendEmail(req.body.status, order);
    }
  );
});

app.post("/order/ship", function (req, res) {
  stripe.orders.update(
    req.body.id,
    {
      metadata: { status: req.body.status },
      status: "fulfilled",
      shipping: {
        carrier: "USPS",
        tracking_number: req.body.tracking,
      },
    },
    function (err, order) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(order);
      sendEmail("Shipped", order);
    }
  );
});
