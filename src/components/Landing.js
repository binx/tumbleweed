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

const Footer = styled.div`
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-transform: uppercase;
  font-size: 14px;

  a {
    color: white;
    display: inline-block;
    margin-left: 5px;
  }
`;

const Landing = ({ config }) => {
  const featuredProducts = getProductsFromCollection(
    config,
    "featured-products"
  );

  const giftShop = getProductsFromCollection(config, "gift-shop").slice(0, 3);
  const weeds = getProductsFromCollection(config, "authentic-weeds").slice(
    0,
    3
  );

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

      <Landscape />

      <PageWrapper>
        <GalleryWrapper>
          <StyledLink>
            <Link to={"/collection/exhibition"}>
              view the tumbleweeds <span style={{ fontSize: "24px" }}>↣</span>
            </Link>
          </StyledLink>
          <ProductList products={weeds} />
        </GalleryWrapper>
      </PageWrapper>

      <Tumbleweeds />

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

      <div style={{ margin: "-60px 0 20px" }}>
        <LandingLinks />
      </div>

      <Footer>
        marfa tumbleweed is a gallery by{"  "}
        <a href="https://rachelbinx.com">rachel binx</a>
      </Footer>
    </>
  );
};

export default Landing;
