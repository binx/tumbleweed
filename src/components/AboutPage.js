import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PageWrapper from "./ui/PageWrapper";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 40px;
  margin: 40px 20px 80px;

  h2 {
    text-transform: uppercase;
    margin: 0 0 40px;
  }
  p {
    line-height: 1.5;
    margin: 0;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
  }

  ul {
    list-style-type: circle;
    color: #555;
    font-weight: 200;
    font-size: 16px;
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

function AboutPage(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <h2>About</h2>
        <p>
          Marfa Tumbleweed is a pop-up tumbleweed gallery, located in Marfa, TX.
        </p>
        <Grid>
          <div>
            <h3>Gallery Artists</h3>
            <ul>
              <li>Rachel Binx</li>
              <li>cypress masso</li>
              <li>Aaron Shoemaker</li>
              <li>Mike Estee</li>
              <li>Amber Pietrzyk</li>
            </ul>
          </div>
          <div>
            <h3>{`Special Thanks <3`}</h3>
            <ul>
              <li>Jeff Wilson</li>
              <li>Chris Delbuck</li>
              <li>Heather Stewart</li>
              <li>Carolina Gallegos</li>
              <li>Leland Dyer</li>
            </ul>
          </div>
        </Grid>
      </Wrapper>
    </PageWrapper>
  );
}

export default AboutPage;
