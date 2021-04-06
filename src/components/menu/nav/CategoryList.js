import React, {useEffect,useState} from 'react'
import pancakesData from "../../../data/pancakesData";
import CategoryItem from './CategoryItem';

function CategoryList() {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    // stores categories, used for comparing
    const temp = [];
    pancakesData.forEach(item=>{
      if( temp.indexOf(item.category) === -1){
        temp.push(item.category)
      }
    })
    setCategories(temp);
  },[pancakesData])
  return (
    <div className ="menu-nav">
      {categories.map((item,index)=>{
        return <CategoryItem text={item} where={"#" + item} key={index}/>
      })}
    </div>
  )
}

export default CategoryList
