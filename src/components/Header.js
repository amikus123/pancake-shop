import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuButton from "./MenuButton";
function Header({ where }) {
  return (
    <Router forceRefresh={true}>
      <header className={where ? "header header__trans" : "header"}>
        <nav>
          <Link to="/" className="logo">
            Cakepan
          </Link>
         
          <MenuButton />

          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/menu">Order now</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Router>
  );
}

export default Header;
