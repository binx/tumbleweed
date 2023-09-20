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

function sendEmail(status, order) {
  let items = order.items.slice(0, -2).map((o) => {
    o.displayAmount = (o.amount / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return o;
  });
  const time = new Date(order.status_transitions.paid * 1000);
  const shipIndex = items.findIndex(
    (i) => i.description === "Flat-Rate Shipping"
  );
  let shipping_cost = "FREE";
  if (shipIndex !== -1) {
    shipping_cost = order.items[shipIndex].displayAmount;
    items.splice(shipIndex, 1);
  }
  email
    .send({
      template: status,
      message: {
        to: order.email,
      },
      locals: {
        order: order,
        order_id: order.id.split("_")[1],
        order_subtotal: (
          items.reduce((a, b) => a + b.amount, 0) / 100
        ).toLocaleString("en-US", { style: "currency", currency: "USD" }),
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

  sendEmail("Ordered", order);
  return;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
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
    // automatic_payment_methods: {
    //   enabled: true,
    // },
    payment_method_types: ["card"],
    // line_items: items.map((i) => ({ price: i.price_id, quantity: i.quantity })),
    // mode: "payment",
    // customer_email: "rachelbinx@gmail.com",
    // metadata: shipping,
    // success_url:
    //   "https://marfatumbleweed.com/confirm?session_id={CHECKOUT_SESSION_ID}",
  });

  res.send({
    client_secret: paymentIntent.client_secret,
    amount: paymentIntent.amount,
  });
});

// app.post("/order/create", function (req, res) {
//   stripe.orders.create(
//     {
//       currency: "usd",
//       items: req.body.items,
//       shipping: req.body.shipping,
//       metadata: req.body.metadata,
//       email: req.body.email,
//     },
//     function (err, order) {
//       sendEmail("Ordered", order);
//       err ? res.status(500).send(err) : res.json(order);
//     }
//   );
// });

// app.post("/order/pay", function (req, res) {
//   stripe.orders.pay(
//     req.body.id,
//     {
//       source: req.body.source,
//     },
//     function (err, order) {
//       if (err) {
//         res.status(500).send(err);
//         return;
//       }
//       res.json(order);
//       sendEmail("Ordered", order);
//     }
//   );
// });

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
