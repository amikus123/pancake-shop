import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import MenuButton from "../general/MenuButton";
import CartIcon from "./Cart/CartIcon";
// it solves the issue of react router links  to working with links to id

function Header({location,handleClick}) {
  // const [location, setLocation] = useState( useLocation());
  const [offset, setOffset] = useState(false);
  // useEffect(() => {
  //   console.log(location,"zmiana");
  // }, [location]);
  // measuer the vertcial offset, used to cgange navbar color
  useEffect(()=>{
    // temporary solution, not efficient
  if(location.pathname === "/"){
    window.onscroll = () => {
      if(window.pageYOffset  <100){
        setOffset(false)
      }else{
        setOffset(true)
      }
    } }
  },[location.pathname])
  // <header className={`header ${(location.pathname ==="/" ) && "header__trans"} ${offset && "header__full"}`}  >

  return (
    // transparency is given on main page
    <header className={`header ${(location.pathname ==="/" )? offset?"header__full":"header__trans":"header__full"}`}>
      <nav>
        <MenuButton  />
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
          <li >
            <CartIcon location="header" handleClick={handleClick}/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
