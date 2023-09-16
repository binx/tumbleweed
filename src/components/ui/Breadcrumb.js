import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";
import { URLize } from "../../util";

const Wrapper = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  > a {
    color: #555;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 650px) {
    margin-bottom: 20px;
  }
`;
const Spacer = styled.span`
  color: #000;
  margin: 0 10px;
  font-size: 20px;
  line-height: 12px;
`;

const Breadcrumb = ({ product, theme, collection }) => {
  let firstLink = { url: "/collection/all-products", name: "All Products" };
  if (collection)
    firstLink = { url: `/collection/${URLize(collection)}`, name: collection };

  return (
    <Wrapper>
      <Link to={firstLink.url}>{firstLink.name}</Link>
      <Spacer color={theme.palette.primary.main}>&raquo;</Spacer>
      <Link to={`/product/${product.url}`}>{product.name}</Link>
    </Wrapper>
  );
};

export default withTheme(Breadcrumb);
