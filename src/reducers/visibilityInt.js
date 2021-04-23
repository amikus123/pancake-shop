const visibility = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE VISIBLEINT":
      return action.payload.value;
    // case "GET VISIBLEINT":
    //     console.log(state,"state")
    //     // return 
    //   return action.payload.index;
    default:
      return state;
  }
};
export default visibility;
