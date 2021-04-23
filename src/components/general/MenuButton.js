import React,{useState,useEffect,useCallback} from "react";

function MenuButton() {
const [isOpen,setIsOpen] = useState(false)
// this makes user able to hide overlay on any click
const handleClick = useCallback((event) => {

    setIsOpen(false)
    console.log(event)

}, [setIsOpen])

useEffect(()=>{
 
  if (isOpen) {
    window.addEventListener("click", handleClick)
} else {
    window.removeEventListener("click", handleClick)
}

return () => window.removeEventListener("click", handleClick)
  
},[isOpen,handleClick])

  return (
     <div className={`abs-con ${isOpen ?"open":""}`}>
    <div className={`menu-icon ${isOpen ?"menu-icon__open":""}`} onClick={()=>setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>

  );
}

export default MenuButton;
