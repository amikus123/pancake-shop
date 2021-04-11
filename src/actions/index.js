export const increment = () =>{
  return{
    type:"INCREMENT"
  }
}

export const createListVisible = (len) =>{
  return{
    type:"CREATE VISIBLE LIST",
    payload : {
      length:len,
    }
  }
}
export const changeListVisible = (index,value) =>{
  return{
    type:"CHANGE VISIBLE LIST",
    payload : {
      index,
      value
    }
  }
}
export const createCategories = (obj) =>{
  return{
    type:"CREATE CATEGORIES",
    payload : {
      obj,
    }
  }
}
