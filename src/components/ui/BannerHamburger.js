import React, { useState } from "react";
import { Link } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const List = styled.ul`
  width: 200px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding: 20px;

  li {
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 20px;
    letter-spacing: 1px;

    a {
      text-decoration: none;
      color: black;
    }
  }
  .left-padding a {
    color: #555;
    padding-left: 12px;
  }
`;

function BannerHamburger({ classes, links, number }) {
  const [menu, toggleMenu] = useState(false);

  return (
    <span style={{ flex: 1, textAlign: "right" }}>
      <IconButton
        color="inherit"
        aria-label="Menu"
        onClick={() => toggleMenu(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={menu}
        onClose={() => toggleMenu(false)}
        onOpen={() => toggleMenu(true)}
      >
        <List>
          <li>
            <Link to={`/`} onClick={() => toggleMenu(false)}>
              Home
            </Link>
          </li>
          {links.map((l, i) => (
            <li
              key={`link${i}`}
              className="left-padding"
              onClick={() => toggleMenu(false)}
            >
              {l}
            </li>
          ))}
          <li>
            <Link to={`/cart`} onClick={() => toggleMenu(false)}>
              Cart{number}
            </Link>
          </li>
        </List>
      </SwipeableDrawer>
    </span>
  );
}
export default BannerHamburger;
