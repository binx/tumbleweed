import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import PageWrapper from "../ui/PageWrapper";
import cloudImg from "../landing/landscape.jpg";

const Confirm = (props) => {
  useEffect(() => {
    const slug = `${props.config.store_slug}_products`;
    props.updateNumber(0);
    localStorage.setItem(slug, JSON.stringify([]));
  });

  /*
    <p>
          A confirmation email has been sent to{" "}
          <b>{props.location.state.order.email}</b>.
        </p>
        <p>Order ID: {props.location.state.order.id.split("_")[1]}</p>
  */

  return (
    <PageWrapper>
      <div style={{ border: "1px solid", padding: "40px", minHeight: "500px" }}>
        <h2 style={{ marginTop: 0, fontWeight: 600 }}>
          Thank you for your purchase!
        </h2>
        <p>You will receive a receipt via email.</p>
        <div style={{ maxWidth: "600px", marginTop: "40px" }}>
          <img src={cloudImg} style={{ width: "100%" }} />
        </div>
      </div>
    </PageWrapper>
  );
};
export default withRouter(Confirm);
