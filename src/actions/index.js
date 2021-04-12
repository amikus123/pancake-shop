
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
  ////
  export const createListVisibleBools = (len) =>{
    return{
      type:"CREATE VISIBLEBOOL LIST",
      payload : {
        length:len,
      }
    }
  }
  export const changeListVisibleBools = (value) =>{
    return{
      type:"CHANGE VISIBLEBOOL LIST",
      payload : {
        value
      }
    }
  }