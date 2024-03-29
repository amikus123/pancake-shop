import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MenuButton from "../general/MenuButton";
import CartIcon from "./Cart/CartIcon";
import { ImArrowLeft2 } from "react-icons/im";

function Header({ location, handleClick }) {
  const [offset, setOffset] = useState(false);
  let history = useHistory();

  // measures the vertcial offset, used to change navbar color
  useEffect(() => {
    if (location.pathname === "/") {
      window.onscroll = () => {
        if (window.pageYOffset < 100) {
          setOffset(false);
        } else {
          setOffset(true);
        }
      };
    }
  }, [location.pathname, history]);
  return (
    // transparency is given on main page
    <header
      className={`header ${
        location.pathname === "/"
          ? offset
            ? "header__full"
            : "header__trans"
          : "header__full"
      } ${
        location.pathname === "/checkout" || location.pathname === "/form"
          ? "header__checkout"
          : null
      }`}
    >
      <nav>
        <MenuButton />
        <Link
          to="#"
          className={`go-back ${
            location.pathname === "/checkout" || location.pathname === "/form"
              ? null
              : "hide"
          }`}
          onClick={() => {
            history.goBack(1);
          }}
        >
          <ImArrowLeft2 />
        </Link>
        <Link to="/" className="logo">
          Cakepan
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/menu">Order now</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <CartIcon location="header" handleClick={handleClick} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
