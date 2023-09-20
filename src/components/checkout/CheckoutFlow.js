import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { Grid } from "@material-ui/core";

import CheckoutHeader from "./CheckoutHeader";
import Email from "./Email";
import Shipping from "./Shipping";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 24px;
  margin-bottom: 24px;
`;

function CheckoutFlow(props) {
  const { classes, api_key, slug, items } = props;

  const [pane, setPane] = useState(0);
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const getSessionSecret = () => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret);
        setPane(1);
      });
  };

  // const setToken = (token) => {
  //   if (!orderID) {
  //     setError(true);
  //     return;
  //   }
  //   fetch("/order/pay", {
  //     method: "POST",
  //     headers: new Headers({ "content-type": "application/json" }),
  //     body: JSON.stringify({
  //       id: orderID,
  //       source: token,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((order) => {
  //       props.updateNumber(0);
  //       localStorage.setItem(slug, JSON.stringify([]));

  //       props.history.push({
  //         pathname: "/confirm",
  //         state: { order },
  //       });
  //     });
  // };

  return (
    <Grid item md={8} xs={12}>
      <Wrapper>
        <CheckoutHeader
          text={"Your Email"}
          classes={classes.heading}
          pane={0}
          currentPane={pane}
          changePane={() => setPane(0)}
        />
        {pane === 0 ? (
          <Email
            email={email}
            handleChange={setEmail}
            changePane={() => getSessionSecret()}
          />
        ) : (
          <div className={classes.inputInfo}>{email}</div>
        )}
      </Wrapper>
      <Wrapper>
        <CheckoutHeader
          text={"Shipping Address"}
          classes={classes.heading}
          pane={1}
          currentPane={pane}
          changePane={() => setPane(1)}
        />
        {pane === 1 && clientSecret ? (
          <Shipping
            api_key={api_key}
            clientSecret={clientSecret}
            changePane={() => setPane(2)}
          />
        ) : (
          ""
        )}
      </Wrapper>
    </Grid>
  );
}
export default withRouter(CheckoutFlow);
