import React from "react";
import styled from "styled-components";

import Button from "../ui/Button";

const Title = styled.h2`
  margin-top: 28px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 30px 0 60px;
  align-items: baseline;
`;
const Description = styled.div`
  color: #555;
  font-size: 16px;
  margin-bottom: 80px;
  line-height: 1.4;
`;
const Details = styled.div`
  clear: both;
  font-size: 14px;
  margin-top: 20px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding: 10px;

  > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    > li {
      margin-bottom: 3px;
    }
  }
`;

const ProductDetails = (props) => {
  const { product } = props;

  return (
    <div>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      {product.bulletPoints && (
        <Details>
          <ul>
            {product.bulletPoints.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </Details>
      )}
      <div style={{ fontWeight: "600", textAlign: "right" }}>
        {props.price &&
          Number(props.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
      </div>
      <Right>
        <Button
          onClick={() => props.addToCart(product)}
          label={"Add To Cart"}
        />
      </Right>
    </div>
  );
};
export default ProductDetails;
