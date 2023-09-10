import React from "react";
import styled from "styled-components";
import { getProductsFromCollection } from "../util";

import PageWrapper from "./ui/PageWrapper";
import Paper from "@material-ui/core/Paper";
import ProductList from "./product/ProductList";

import headerImg from "./landing/tumble-header.jpeg";

const Hero = styled.div`
  height: 400px;
  background-image: url(${headerImg});
  background-size: cover;
  background-position: 50%;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0 20px;
  font-family: Inter;
`;

const Landing = ({ config }) => {
  const featuredProducts = getProductsFromCollection(
    config,
    "featured-products"
  );

  return (
    <>
      <Hero>
        <div style={{ display: "inline-block", maxWidth: "80%" }}>
          <p
            style={{
              fontSize: "64px",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "0 0 6px #DEBA84",
            }}
          >
            marfa tumbleweed
          </p>
        </div>
      </Hero>
      <PageWrapper>
        <Paper style={{ padding: "40px" }}>
          {/* <Divider style={{ margin: "40px 0" }} /> */}
          <ProductList products={featuredProducts} />
        </Paper>
      </PageWrapper>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#888" }}>
        this is a site by{" "}
        <a style={{ color: "#888" }} href="https://rachelbinx.com">
          rachel binx
        </a>
      </p>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        <a
          style={{ color: "#888" }}
          href="https://www.motherjones.com/environment/2016/12/tumbleweeds-attack-stroomer/"
        >
          header image source
        </a>
      </p>
    </>
  );
};

export default Landing;
