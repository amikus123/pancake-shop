import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
function Header({ where }) {
  return (
    <Router
    forceRefresh={true}
    >
      <header className={where ? "header header-trans" : "header"}>
        <Link to="/" className="logo">
          Cakepan
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link 
              to="/menu"
              >Menu</Link>
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
