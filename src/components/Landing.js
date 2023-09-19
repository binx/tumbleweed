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
import { Landscape, Tumbleweeds } from "./landing/Landscape";
import Footer from "./ui/Footer";

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

const Landing = ({ config }) => {
  const featuredProducts = getProductsFromCollection(
    config,
    "featured-products"
  );

  const giftShop = getProductsFromCollection(config, "gift-shop").slice(0, 3);
  const weeds = getProductsFromCollection(config, "tumbleweeds").slice(0, 3);

  return (
    <>
      <HeroIntro />
      <LandingLinks />
      <BigQuote />
      <Gallery />
      {/* <Soil /> */}

      <PageWrapper>
        <GalleryWrapper>
          <StyledLink>
            <Link to={"/collection/tumbleweeds"}>
              see the tumbleweeds <span style={{ fontSize: "24px" }}>↣</span>
            </Link>
          </StyledLink>
          <ProductList products={weeds} />
        </GalleryWrapper>
      </PageWrapper>

      <Landscape />

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

      <Tumbleweeds />

      <PageWrapper>
        <GalleryWrapper>
          <StyledLink>
            <Link to={"/collection/gift-shop"}>
              peruse the gift shop <span style={{ fontSize: "24px" }}>↣</span>
            </Link>
          </StyledLink>
          <ProductList products={giftShop} />
        </GalleryWrapper>
      </PageWrapper>

      <div style={{ margin: "-60px 0 20px" }}>
        <LandingLinks />
      </div>

      <Footer />
    </>
  );
};

export default Landing;
