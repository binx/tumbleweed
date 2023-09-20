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
    letter-spacing: 1px;
  }
  p {
    line-height: 1.5;
    margin: 0;
    font-weight: 300px;
    letter-spacing: 0.5px;
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

    li {
      margin-bottom: 8px;
    }

    li a {
      color: black;
      text-decoration: none;
      border-bottom: 1px dotted;
    }
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
        <p style={{ marginTop: "20px" }}>
          For press inquiries or general questions, please contact us at{" "}
          <b>marfatumbleweed@gmail.com</b>
        </p>
        <Grid>
          <div>
            <h3>Gallery Artists</h3>
            <ul>
              <li>
                <a href="https://rachelbinx.com/">rachel binx</a>
              </li>
              <li>
                <a href="https://outofambit.com/">cypress masso</a>
              </li>
              <li>Aaron Shoemaker</li>
              <li>
                <a href="http://mikeestee.com/">Mike Estee</a>
              </li>
              <li>
                <a href="https://amberpietrzyk.com/">Amber Pietrzyk</a>
              </li>
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
