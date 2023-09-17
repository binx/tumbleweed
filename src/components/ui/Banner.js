import React from "react";
import { Link, withRouter } from "react-router-dom";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import styled from "styled-components";

import { useSelector } from "react-redux";

import BannerHamburger from "./BannerHamburger";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 24px 48px;

  h3 {
    font-family: "Yavome", sans-serif;
    margin: 0 72px 0 0;
    font-size: 28px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .link {
    margin-right: 32px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    &:hover {
      text-decoration: dashed underline;
    }
  }
`;

function Banner({ quantity, config, width, location }) {
  const isAdmin = useSelector((state) => state.reducers.isAdmin);

  const number = quantity ? ` (${quantity})` : "";

  let links = [
    { url: "/collection/tumbleweeds", label: "Tumbleweeds" },
    { url: "/collection/exhibition", label: "Exhibition" },
    { url: "/collection/gift-shop", label: "Gift Shop" },
  ];
  if (config.about_page) links.push({ url: "/about", label: "About" });

  if (isAdmin) {
    links.push({ url: "/config", label: "Config" });
    links.push({ url: "/orders", label: "Orders" });
  }

  const renderLinks = (link, i) => (
    <Link
      to={link.url}
      key={`l${i}`}
      style={{ flex: i === links.length - 1 ? 1 : null }}
      className="link"
    >
      {link.label}
    </Link>
  );

  let menu;
  if (isWidthDown("sm", width)) {
    menu = <BannerHamburger links={links.map(renderLinks)} number={number} />;
  } else {
    menu = (
      <span style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <span style={{ flex: 1 }}>{links.map(renderLinks)}</span>
        <Link to={`/cart`} className="link" style={{ margin: 0 }}>
          Cart{number}
        </Link>
      </span>
    );
  }

  if (location.pathname === "/") return null;

  return (
    <Wrapper>
      <h3>
        <Link to={`/`}>{config.store_name}</Link>
      </h3>
      {menu}
    </Wrapper>
  );
}
export default withRouter(withWidth()(Banner));
