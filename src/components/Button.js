import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
function Button({text, location, type}) {
  return (
    <Router forceRefresh={true}>
      <Link  to={location} className={`button button__${type}`}>
        <span>{text}</span>
      </Link>
    </Router>
  )
}

export default Button
