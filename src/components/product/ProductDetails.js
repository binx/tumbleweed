import React, { useState } from "react";
import styled from "styled-components";

import Button from "../ui/Button";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

const Title = styled.h2`
  margin-top: 28px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const FlexWrapper = styled.div`
  margin: 20px 0 40px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  > label {
    line-height: 34px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.87);
    text-transform: capitalize;
  }
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
  > ul {
    margin: 0;
    padding: 0 20px 0;
    > li {
      margin-bottom: 10px;
    }
  }
`;

const ProductDetails = (props) => {
  const { variants, inventory } = props;
  const [product, setProduct] = useState(props.product);

  const selectOption = (name) => (event) => {
    const newProduct = Object.assign(
      { ...product },
      {
        [name]: event.target.value,
      }
    );
    setProduct(newProduct);

    const index = event.target.selectedIndex;
    const selectedOption = event.target.childNodes[index];
    const sku_id = selectedOption.getAttribute("sku_id");
    const price = selectedOption.getAttribute("price");
    const inventory = selectedOption.getAttribute("inventory");
    if (sku_id) props.updateSkuPrice(sku_id, price, inventory);
  };

  let inventoryStatus, noAvailableProducts;
  if (inventory && inventory.type !== "infinite") {
    if (inventory.quantity === 0) {
      inventoryStatus = (
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>SOLD OUT</div>
      );
      noAvailableProducts = true;
    } else if (inventory.quantity < 3) {
      inventoryStatus = (
        <div
          style={{ marginBottom: "10px" }}
        >{`${inventory.quantity} Available`}</div>
      );
    }
  }

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
      {!!variants.length && variants.length > 1 && (
        <FlexWrapper>
          {variants.map((v, i) => (
            <Row key={`variant${i}`}>
              <label>{v.name}</label>
              <Select
                native
                value={product[v.name]}
                onChange={selectOption(v.name)}
                style={{ width: "155px", fontSize: "14px", height: "29px" }}
              >
                {v.options.map((option, j) => {
                  if (option.label && isNaN(option.label)) {
                    option.label =
                      option.label.charAt(0).toUpperCase() +
                      option.label.slice(1);
                  }
                  return (
                    <option
                      key={j}
                      value={option.label}
                      sku_id={option.sku_id}
                      price={option.price}
                      inventory={JSON.stringify(option.inventory)}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </Select>
            </Row>
          ))}
        </FlexWrapper>
      )}
      <div style={{ textAlign: "right", fontSize: "14px", color: "#555" }}>
        {inventoryStatus}
      </div>
      <div style={{ fontWeight: "600", textAlign: "right" }}>
        {props.price &&
          Number(props.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
      </div>
      <Right>
        <Button
          disabled={noAvailableProducts}
          onClick={() => props.addToCart(product)}
          label={"Add To Cart"}
        />
        {!noAvailableProducts && (
          <TextField
            value={props.quantity}
            onChange={(e) => props.setQuantity(e.target.value)}
            type="number"
            inputProps={{
              min: "1",
              step: "1",
              max: inventory ? inventory.quantity : null,
            }}
            margin="normal"
            style={{ width: "40px", margin: "0 30px 0" }}
          />
        )}
      </Right>
    </div>
  );
};
export default ProductDetails;
