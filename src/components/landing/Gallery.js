import React from "react";
import styled from "styled-components";

import galleryIMG from "./storefront.jpg";

const Grid = styled.div`
  display: flex;
  margin-bottom: 80px;

  > div {
    width: 50%;
  }

  > div:first-child {
    padding-bottom: 33%;
  }
  @media (max-width: 800px) {
    > div:first-child {
      padding-bottom: 50%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
    > div:first-child {
      padding-bottom: 66%;
    }
  }
`;
const GalleryPhoto = styled.div`
  background-image: url(${galleryIMG});
  background-size: cover;
  position: 50%;
`;
const Text = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 2;
  letter-spacing: 1px;
  @media (max-width: 500px) {
    border: none;
    padding: 40px 0;
  }
`;

const Gallery = () => {
  return (
    <Grid>
      <GalleryPhoto />
      <Text>
        <div>Open Thurs-Sun</div>
        <div style={{ marginBottom: "60px" }}>10am - 4pm</div>

        <div>208 W El Paso St</div>
        <div>Suite 3</div>
        <div>Marfa, TX 79843</div>
      </Text>
    </Grid>
  );
};

export default Gallery;
