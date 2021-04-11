import React, {useEffect,useState} from 'react'
import pancakesData from "../../../data/pancakesData";
import CategoryItem from './CategoryItem';


function CategoryList({sticky,tholds}) {
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
  },[])
  return (
    <div className="save-padding">
 <div className ={`menu-nav ${sticky? "menu-nav-sticky":"menu-nav-relative"}`}>
      <div className="menu-nav-list">
        <div className="hidden-layer"></div>
      {categories.map((item,index)=>{
        return <CategoryItem text={item} where={"#" + item} key={index} inView={tholds[index]}/>
      })}
      </div>
     
    </div>
    </div>
  
  )
}

export default CategoryList
