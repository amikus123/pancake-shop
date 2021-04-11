const categories = (state = [],action) =>{
  switch (action.type){
    case "CREATE CATEGORIES":
      return action.payload.obj;
    default:
      return state;
  }
}
export default  categories;