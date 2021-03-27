import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Landing from "../pages/Landing";
import Menu from "../pages/Menu";
import MenuButton from "./MenuButton";

function Header({ location }) {
  useEffect(() => {
    console.log(location,"zmiana");

  }, [location]);

  
  return (
    <header className={location.pathname === "/" ? "header header__trans" : "header"}>
      <nav>
        <MenuButton />
        <Link to="/" className="logo">
          Cakepan
        </Link>
        <ul>
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" >
              Menu
            </Link>
          </li>
          <li>
            <Link to="/menu" >
              Order now
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
