import React from 'react';
import Icon from "./CardsIcon";

function IconsRow({fun,number}) {
  let three = [1,2,3]

  return (
    <div className="icon-row hide-desktop" >
   {
     three.map((index)=>{
       return <Icon fun={fun} ownNumber={index} number={number}  key={index} />
     })
   }
    </div>
  )
}

export default IconsRow
