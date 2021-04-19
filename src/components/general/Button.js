import React from 'react'
import { Link } from "react-router-dom";
function Button({text, location, type,classes,onClick}) {
  return (
      <Link  to={location || "/"}  className={`button button__${type || "red"} ${classes}`} onClick={onClick} >
        <span>{text}</span>
      </Link>
  )
}

export default Button
