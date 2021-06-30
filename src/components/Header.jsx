import React from "react";
import "./css/Header.css";
import { IconButton } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { Forum } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-Logo-2012.png"
        alt=""
      />
      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
