import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 120px 120px 0;
  h1 {
    font-family: Yavome, sans-serif;
    font-size: 120px;
    font-weight: normal;
    margin: 0;
  }

  @media (max-width: 1100px) {
    padding: 80px 80px 0;
    h1 {
      font-size: 100px;
    }
  }
  @media (max-width: 800px) {
    padding: 60px 20px 0;
    h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 400px) {
    padding: 60px 20px;
    h1 {
      font-size: 40px;
    }
  }
`;
const Vibe = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 300px;

  p {
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.5;
    padding: 8px 0;
    position: absolute;
    background: white;
    top: 80px;
  }
  @media (max-width: 550px) {
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 400px) {
    height: 200px;
    p {
      background-color: rgba(255, 255, 255, 0.85);
    }
  }
`;
const Tumble = styled.div`
  background-image: url(${(props) => props.src});
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-position: 50%;
  transform: rotate(-140deg);
  margin-top: -35px;
  @media (max-width: 550px) {
    margin-top: -24px;
    width: 250px;
    height: 250px;
  }
  @media (max-width: 400px) {
    margin-top: -10px;
    width: 220px;
    height: 220px;
  }
`;

const HeroIntro = () => {
  return (
    <Wrapper>
      <h1>Marfa Tumbleweed</h1>
      <Vibe>
        <Tumble src={`${process.env.PUBLIC_URL}/tumble.svg`} />
        <p>
          a high-end tumbleweed gallery, locally sourced from far west texas
        </p>
      </Vibe>
    </Wrapper>
  );
};

export default HeroIntro;
