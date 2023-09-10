import React from "react";
import styled from "styled-components";

import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import Button from "../ui/Button";

const Label = styled.label`
  display: inline-block;
  min-width: 120px;
  margin-right: 20px;
  font-weight: bold;
`;

function ShippingOptions(props) {
  const { options, shippingOption } = props;

  const selectOption = (e) => {
    const newOption = options.find((o) => o.name === e.target.value);
    props.setShippingOption(newOption);
  };

  const getLabel = (o) => (
    <div>
      <Label>{o.name}</Label>
      <span>
        {(o.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );

  return (
    <div style={{ marginTop: "20px" }}>
      <RadioGroup
        value={shippingOption ? shippingOption.name : ""}
        onChange={selectOption}
        style={{ marginBottom: "40px" }}
      >
        {options.map((o, i) => (
          <FormControlLabel
            key={`radio${i}`}
            value={o.name}
            control={<Radio />}
            label={getLabel(o)}
          />
        ))}
      </RadioGroup>
      <Button
        disabled={!shippingOption}
        onClick={props.createOrder}
        label="Continue"
      />
    </div>
  );
}
export default ShippingOptions;
