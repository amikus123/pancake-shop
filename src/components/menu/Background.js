import React, {forwardRef} from 'react'
import CategoryList from "./nav/CategoryList";
const  Background = forwardRef((props,ref) => {
  return (
    <div className="background" ref={ref}> 
      <h1>Our menu </h1>
      <div className="hide-curve"></div>
    </div>
  )
})

export default Background
