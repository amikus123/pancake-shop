import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
function Button({text, location, type,classes}) {
  return (
      <Link  to={location}  className={`button button__${type} ${classes}`} >
        <span>{text}</span>
      </Link>
  )
}

export default Button
