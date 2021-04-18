
export const createCategories = (obj) =>{
  return{
    type:"CREATE CATEGORIES",
    payload : {
      obj,
    }
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
  export const changeVisibleInt= (value) =>{
    return{
      type:"CHANGE VISIBLEINT",
      payload : {
        value
      }
    }
  }
  export const changeForcedNumber= (value) =>{
    return{
      type:"NUMBER CHANGED",
      payload : {
        value
      }
    }
  }
  export const addItemToCart= (obj) =>{
    return{
      type:"ADD ITEM",
      payload : {
        obj
      }
    }
  }
  export const removeItemFromCart= (obj) =>{
    return{
      type:"REMOVE ITEM",
      payload : {
        obj
      }
    }
  }
