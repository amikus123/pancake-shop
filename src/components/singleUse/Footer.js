import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="foot">
      <div className="wrapper">
        <div className="contact">
          <Link to="/" className="logo">
            Cakepan
          </Link>
          <ul className="address">
            <li>ul. Traugutta Romualda 143</li>
            <li>Warszawa 61-514</li>
            <li>Polska</li>
          </ul>
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <nav className="footer-link">
          <ul>
            <li>Attributions</li>
            <li>
              <a
                href="https://freedesignfile.com/380895-pretty-female-cook-stock-photo-07/
"
              >
                Woman
              </a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/business">Young male</a>
            </li>
            <li>
              <a href="https://www.freepik.com/photos/fashion">Older cook</a>
            </li>
            <li>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
          </ul>
          <ul>
            <li>Our Menu</li>
            <li>Special</li>
            <li>Popular</li>
            <li>Categories</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
