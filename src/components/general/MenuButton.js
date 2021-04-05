import React,{useState} from "react";

function MenuButton() {
const [isOpen,setIsOpen] = useState(false)
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
