import React from "react";
import styled from "styled-components";

import landscapeIMG from "./landscape.jpg";
import tumbleIMG from "./tumbleweeds.jpg";

const LandscapeImg = styled.div`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 550px;
  background-size: cover;
  background-position: 50% 80%;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 550px) {
    height: 300px;
  }
`;
const Marfa = styled.div`
  color: white;
  font-size: 110px;
  text-transform: uppercase;
  border: 8px solid white;
  border-radius: 120px;
  padding: 10px 60px;
  font-family: Gotham;
  margin-bottom: 40px;
  letter-spacing: 2px;

  @media (max-width: 800px) {
    font-size: 70px;
    padding: 0px 40px;
    margin-bottom: 10px;
    border: 6px solid white;
  }
  @media (max-width: 550px) {
    font-size: 50px;
    border: 4px solid white;
  }
  @media (max-width: 400px) {
    font-size: 40px;
    padding: 0px 25px;
    border: 3px solid white;
  }
`;

export const Landscape = () => {
  return (
    <LandscapeImg src={landscapeIMG}>
      <Marfa>Marfa</Marfa>
    </LandscapeImg>
  );
};

export const Tumbleweeds = () => {
  return (
    <LandscapeImg src={tumbleIMG}>
      <Marfa>Tumbleweed</Marfa>
    </LandscapeImg>
  );
};
