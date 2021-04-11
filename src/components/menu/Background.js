import React, {forwardRef} from 'react'
const  Background = forwardRef((props,ref) => {
  return (
    <div className="background" ref={ref}> 
      <h1>Our menu </h1>
    </div>
  )
})

export default Background
