import React from "react";
import { getProductsFromCollection } from "../util";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeroIntro from "./landing/HeroIntro";
import BigQuote from "./landing/BigQuote";
import Gallery from "./landing/Gallery";
import PageWrapper from "./ui/PageWrapper";
import ProductList from "./product/ProductList";
// import Soil from "./landing/Soil";
import LandingLinks from "./landing/LandingLinks";

import landscapeIMG from "./landing/landscape.jpg";

const StyledLink = styled.h3`
  margin: 0 0 32px 0;

  a {
    color: black;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    &:hover {
      text-decoration: dashed underline;
    }
  }
`;
const GalleryWrapper = styled.div`
  border: 1px solid black;
  padding: 40px;
  margin-bottom: 80px;

  @media (max-width: 1100px) {
    margin: 0 20px 80px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
const LandscapeImg = styled.div`
  background-image: url(${landscapeIMG});
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
  border: 6px solid white;
  border-radius: 120px;
  padding: 10px 60px;
  font-family: Gotham;
  margin-bottom: 40px;
  letter-spacing: 2px;

  @media (max-width: 800px) {
    font-size: 70px;
    padding: 0px 40px;
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
    padding: 0px 25px;
    margin-bottom: 10px;
    border: 3px solid white;
  }
`;

const Landing = ({ config }) => {
  const featuredProducts = getProductsFromCollection(
    config,
    "featured-products"
  );

  const giftShop = getProductsFromCollection(config, "gift-shop").slice(0, 3);

  return (
    <>
      <HeroIntro />
      <LandingLinks />
      <BigQuote />
      <Gallery />

      <PageWrapper>
        <GalleryWrapper>
          <StyledLink>
            <Link to={"/collection/exhibition"}>
              view the exhibition <span style={{ fontSize: "24px" }}>↣</span>
            </Link>
          </StyledLink>
          <ProductList products={featuredProducts} />
        </GalleryWrapper>
      </PageWrapper>
      {/* <Soil /> */}

      <LandscapeImg>
        <Marfa>Marfa</Marfa>
      </LandscapeImg>

      <PageWrapper>
        <GalleryWrapper>
          <StyledLink>
            <Link to={"/collection/exhibition"}>
              view the gift shop <span style={{ fontSize: "24px" }}>↣</span>
            </Link>
          </StyledLink>
          <ProductList products={giftShop} />
        </GalleryWrapper>
      </PageWrapper>

      <LandingLinks />
    </>
  );
};

export default Landing;
