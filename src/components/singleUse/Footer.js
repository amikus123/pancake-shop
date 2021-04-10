import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';

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
    <FaFacebookF/>
    <FaTwitter/>
    <FaInstagram/>
        </div>
      </div>
      <nav className="footer-link">
    <ul>
      <li>Information </li>
      <li>Among us</li>
      <li>About us</li>
      <li>Testimonials</li>
      <li>Events </li>

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
  )
}

export default Footer
