import React from "react";
import styled from "styled-components";

import img1 from "./images/1.png";
import img2 from "./images/2.gif";
import img3 from "./images/3.png";

const BG = styled.div`
  background-color: #eecfcf;
  padding: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding-bottom: min(66%, 726px);
  position: relative;
`;
const Relative = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .overlap {
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
  }
`;
const Credit = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  padding: 6px;
  border-bottom: 1px solid;
  max-width: 1100px;
  margin: 0 auto 120px;
  a {
    color: black;
  }

  @media (max-width: 600px) {
    margin-bottom: 80px;
  }
`;

const ElisabethGif = () => {
  return (
    <>
      <BG>
        <Wrapper>
          <Relative>
            <img className="overlap" src={img1} style={{ zIndex: 20 }} />
            <img className="overlap" src={img2} style={{ zIndex: 10 }} />
            <img className="overlap" src={img3} style={{ zIndex: 0 }} />
          </Relative>
        </Wrapper>
      </BG>
      <Credit>
        "tumb-4" by <a href="https://elisabethnicula.com/">Elisabeth Nicula</a>
      </Credit>
    </>
  );
};

export default ElisabethGif;
