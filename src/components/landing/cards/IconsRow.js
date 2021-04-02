import React from 'react';
import Icon from "./Icon";

function IconsRow({fun,number}) {
  let three = [1,2,3]

  return (
    <div className="icon-row">
   {
     three.map((index)=>{
       return <Icon fun={fun} ownNumber={index} number={number}  key={index} />
     })
   }
    </div>
  )
}

export default IconsRow
