import React, { useEffect, useState } from 'react';
import pancakesData from "../../../data/pancakesData";
import ProductFrame from '../../general/ProductFrame';
import PancakeCategory from './PancakeCategory';
function PancakesFull() {
  // i will one array in to 2D arraty containing products of one type
  const [fullList, setFullList] = useState([])
 useEffect(()=>{
  // geting all category names
  const uniqueNames = [];
  pancakesData.forEach(item=>{
    if( uniqueNames.indexOf(item.category) === -1){
      uniqueNames.push(item.category)
    }
  })
  // it is used to hold category name and items assosciated with category
  const productsByCategory = [];
  uniqueNames.forEach(category=>{
    productsByCategory.push({
      category,
      list : [],
    })
  })

  pancakesData.forEach(product=>{
    const index = uniqueNames.indexOf(product.category);
    productsByCategory[index].list.push(product);

  })
  console.log(productsByCategory)
  setFullList(productsByCategory)
 },[])
  return (
    <div className="menu-container">
      {fullList.map((category,index)=>{
       return  <PancakeCategory data={category} key={index}/>
      })}
    </div>
  )
}

export default PancakesFull
