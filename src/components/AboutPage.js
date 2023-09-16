import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PageWrapper from "./ui/PageWrapper";

const Wrapper = styled.div`
  border: 1px solid black;
  padding: 40px;
  margin: 40px 20px 80px;

  h2 {
    text-transform: uppercase;
    font-weight: 100;
    margin: 0 0 40px;
  }
  p {
    line-height: 1.5;
    color: #555;
    margin: 0;
  }
`;

function AboutPage(props) {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    fetch("/about-text/")
      .then((res) => res.json())
      .then((results) => {
        if (results.error) return;
        else setAboutText(results);
      });
  }, []);
  return (
    <PageWrapper>
      <Wrapper>
        <h2>About</h2>
        {aboutText.split("\n").map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </Wrapper>
    </PageWrapper>
  );
}

export default AboutPage;
