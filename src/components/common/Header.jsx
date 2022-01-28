import React from "react";
import LogoImg from "../../asset/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={LogoImg} />
      </Link>
    </header>
  );
};

export default Header;
