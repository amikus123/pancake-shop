import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Landing from "../pages/Landing";
import Menu from "../pages/Menu";
import MenuButton from "./MenuButton";

function Header({ where }) {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    console.log(window.location.pathname);
    setPathname(window.location.pathname)

  }, []);
  const checkLanding = () => {
    console.log(333);
    console.log(window.location.pathname);
    setPathname(window.location.pathname)
  };
  
  return (
    <header className={where ? "header header__trans" : "header"}>
      <nav>
        <MenuButton />
        <Link to="/" className="logo" onClick={checkLanding}>
          Cakepan
        </Link>
        <ul>
          <li>
            <Link to="/" onClick={checkLanding}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={checkLanding}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={checkLanding}>
              Order now
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={checkLanding}>
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
