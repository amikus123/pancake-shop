import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
function Button({text, location, type,classes}) {
  return (
    <Router forceRefresh={true}>
      <Link  to={location} className={`button button__${type} ${classes}`}>
        <span>{text}</span>
      </Link>
    </Router>
  )
}

export default Button
