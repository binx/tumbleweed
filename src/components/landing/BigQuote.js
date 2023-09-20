import React from "react";
import styled from "styled-components";

import cloudsIMG from "./clouds.jpg";

const QuoteWrapper = styled.div`
  position: relative;
  height: 540px;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 1100px) {
    height: 450px;
  }
  @media (max-width: 550px) {
    height: 350px;
  }
`;
const BG = styled.div`
  background-image: url(${cloudsIMG});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  position: absolute;
  top: 0;
`;
const Blend = styled.div`
  mix-blend-mode: lighten;
  position: absolute;
  font-size: 100px;
  top: 0;
  z-index: 1;
  color: white;
  background: rgba(0, 60, 120, 0.9);
  mix-blend-mode: multiply;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  font-family: Imbue, sans-serif;
  line-height: 1;
  text-align: center;
  text-wrap: balance;
  @media (max-width: 1400px) {
    font-size: 80px;
  }
  @media (max-width: 1100px) {
    font-size: 60px;
  }
  @media (max-width: 750px) {
    font-size: 50px;
  }
  @media (max-width: 600px) {
    font-size: 40px;
    padding: 0px 20px;
  }
  @media (max-width: 450px) {
    font-size: 34px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

const BigQuote = () => {
  return (
    <QuoteWrapper>
      <BG></BG>
      <Blend>
        An art exhibition that explores the tension between the endemic
        environment and our commodified idea of the desert. We examine the
        intricate forms and complex history of the iconic tumbleweeds of
        Marfa,&nbsp;Texas.
      </Blend>
    </QuoteWrapper>
  );
};

export default BigQuote;
