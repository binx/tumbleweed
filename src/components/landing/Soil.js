import React from "react";
import styled from "styled-components";

import img1 from "./intro-soil.png";
import img2 from "./intro-wind.png";
import img3 from "./intro-flora.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: 80px;

  > div {
    padding-bottom: 100%;
    position: relative;
    color: white;
    font-size: 64px;
    font-family: Yavome, sans-serif;
    background-size: cover;
  }
  > div > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Quote = styled.div`
  font-family: Imbue;
  margin: 40px 0 120px;
  font-size: 72px;
`;

const Soil = () => {
  return (
    <>
      <Grid>
        <div style={{ backgroundImage: `url(${img1})` }}>
          <div>soil</div>
        </div>
        <div style={{ backgroundImage: `url(${img2})` }}>
          <div>wind</div>
        </div>
        <div style={{ backgroundImage: `url(${img3})` }}>
          <div>flora</div>
        </div>
      </Grid>
      <Quote>
        Profound significance lies in soil that birthed the original plants,
        giving rise to the tumbleweeds that now grace our desert landscapes.{" "}
      </Quote>
    </>
  );
};

export default Soil;
