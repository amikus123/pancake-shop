import React, { useEffect, useState } from 'react';
import pancakesData from "../../../data/pancakesData";
import PancakeCategory from './PancakeCategory';
function PancakesFull({tholds,setTholds}) {
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
  const emptyArrOfCategories = [];

  uniqueNames.forEach(category=>{
    productsByCategory.push({
      category,
      list : [],
    })
    emptyArrOfCategories.push(false)
  })

  pancakesData.forEach(product=>{
    const index = uniqueNames.indexOf(product.category);
    productsByCategory[index].list.push(product);

  })
  console.log(productsByCategory)
  setFullList(productsByCategory)
  setTholds(emptyArrOfCategories);
 },[])

 useEffect(()=>{
  console.log(tholds)
 },[tholds])
 // state control
 const updateSingle = index => {
    const res = (val) =>{
      const stateCopy = tholds;
      stateCopy[index] = val;
      setTholds(stateCopy)
      console.log("ZMIANA",tholds)
    }
    return res;
 }
  return (
    <div className="menu-container">
      {fullList.map((category,index)=>{
       return  <PancakeCategory data={category} key={index}  update={updateSingle(index)} vis={tholds[index] +""} />
      })}
      {tholds.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default PancakesFull
