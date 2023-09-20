import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border: 1px solid black;
  background: white;
  appearance: none;
  text-transform: uppercase;
  padding: 12px 24px;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    background: black;
    color: white;
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #888;
    background-color: #eee;
    color: #888;
    cursor: not-allowed;
  }
`;

const Button = ({ onClick, disabled, label, type }) => {
  return (
    <Wrapper type={type || "submit"} disabled={disabled} onClick={onClick}>
      {label}
    </Wrapper>
  );
};
export default Button;
