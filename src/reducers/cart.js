  const cart = (state = [], action) => {

    const checkIfInside = name =>{
      // if index == -1, then it is on inside
      let isInside = -1;
      state.forEach((obj,index)=>{
        if(obj.product.name === name){
          isInside = index;
        }
      })
      return isInside
    }
    switch (action.type) {
      // each product is stored in object, who sotres toe object data and the amount of said product
      case "ADD ITEM":
        // if item is inside of cart, i will increase the count
        const itemIndex = checkIfInside(action.payload.obj.name)
        if(itemIndex === -1){
          //adding
          const obj = {
            amount :1,
            product : action.payload.obj
          }
          state.push(obj)
        }else{
          // increasing amount
          state[itemIndex].amount++;
        }
        return state;
      case "REMOVE ITEM":
        const itemIndexRemove = checkIfInside(action.payload.obj.name)
        state[itemIndexRemove].amount--;
        if(state[itemIndexRemove].amount <=0){
          state.splice(itemIndexRemove,1)
        }
       
        return state
      default:
        return state;
    }
  };
  export default cart;
  