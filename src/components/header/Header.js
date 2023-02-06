import React, { useState, useContext } from "react";
import context from "../utils/Context";

import "./Header.style.scss";

const Header = () => {
  const ctx = useContext(context);

  return (
    <div className="header">
      <div className="logo_wrapper">
        <img
          src={require("../../assets/book.png")}
          alt="logo"
          className={`${ctx.darkTheme ? "dark_mode" : ""}`}
        />
      </div>
      <div className="header_actions">
        <select
          className={`header_select ${
            ctx.darkTheme ? "header_select_dark" : ""
          }`}
          onChange={() => ctx.changeFont()}
        >
          <option value="sarif">Sarif</option>
          <option value="sans">Sans Sarif</option>
        </select>
        <div className="header_theme">
          <img
            src={require(`../../assets/${
              !ctx.darkTheme ? "night-mode" : "sunny"
            }.png`)}
            alt="theme"
            className={`header_theme_img ${ctx.darkTheme ? "dark_mode" : ""}`}
          />
          <label className="switch">
            <input type="checkbox" onClick={() => ctx.switchThame()} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
