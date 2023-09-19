import React from "react";
import styled from "styled-components";

import instaSVG from "../../assets/instagram.svg";

const FooterDiv = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-transform: uppercase;
  font-size: 14px;

  a {
    color: white;
    display: inline-block;
    margin-left: 3px;
  }
`;
const A = styled.a`
  display: block;
`;
const Insta = styled.div`
  background-image: url(${instaSVG});
  background-size: contain;
  width: 24px;
  height: 24px;
  fill: white;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <A href="https://www.instagram.com/marfa_tumbleweed/">
        <Insta />
      </A>
      <div>
        marfa tumbleweed is a gallery by{"  "}
        <a href="https://rachelbinx.com">rachel binx</a>
      </div>
    </FooterDiv>
  );
};

export default Footer;
