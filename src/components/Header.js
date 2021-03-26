import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Landing from "../pages/Landing";
import Menu from "../pages/Menu";
import MenuButton from "./MenuButton";
function Header({ where }) {
  return (
      <header className={where ? "header header__trans" : "header"}>
        <nav>
          <MenuButton />
          <Link to="/" className="logo" >
            Cakepan
          </Link>
          <ul>
            <li>
              <Link to="/" > Home</Link>
            </li>
            <li>
              <Link to="/menu" >Menu</Link>
            </li>
            <li>
              <Link to="/menu" >Order now</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
