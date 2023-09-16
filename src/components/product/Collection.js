import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import PageWrapper from "../ui/PageWrapper";
import Paper from "@material-ui/core/Paper";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 40px;
  margin: 40px 20px 80px;

  h2 {
    text-transform: uppercase;
    margin: 0 0 40px;
  }

  @media (max-width: 650px) {
    padding: 20px;
  }
`;

const Collection = ({ products, title }) => (
  <PageWrapper>
    <Wrapper>
      <h2>{title}</h2>
      <ProductList products={products} collection={title} />
    </Wrapper>
  </PageWrapper>
);
export default Collection;
