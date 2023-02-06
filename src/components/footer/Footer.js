import React, { useContext } from "react";
import context from "../utils/Context";

import "./Footer.style.scss";

const Footer = () => {
  const ctx = useContext(context);
  return (
    <footer className={`${ctx.darkTheme ? "dark" : ""}`}>
      &copy; 2023 | Programmed by{" "}
      <a
        href="https://www.linkedin.com/in/bartosz-kozecki-ba798a197/"
        target="_blank"
        className={`${ctx.darkTheme ? "dark" : ""}`}
      >
        bkozecki
      </a>{" "}
    </footer>
  );
};

export default Footer;
