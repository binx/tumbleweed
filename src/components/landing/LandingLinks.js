import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;
const Links = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  display: inline-block;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px 40px;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;

  a {
    color: black;
    text-decoration: none;
    text-align: center;
    &:hover {
      text-decoration: dashed underline;
    }
  }

  @media (max-width: 500px) {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 60px;
  }
  @media (max-width: 370px) {
    justify-content: center;
    flex-direction: column;
    gap: 20px 60px;
  }
`;

const LandingLinks = () => {
  return (
    <Wrapper>
      <Links>
        <Flex>
          <Link to={"/collection/tumbleweeds"}>Tumbleweeds</Link>
          <Link to={"/collection/exhibition"}>Exhibition</Link>
          <Link to={"/collection/gift-shop"}>Gift Shop</Link>
          <Link to={"/about"}>About</Link>
        </Flex>
      </Links>
    </Wrapper>
  );
};

export default LandingLinks;
