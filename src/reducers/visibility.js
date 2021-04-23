const visibility = (state = [], action) => {
  switch (action.type) {
    case "CREATE VISIBLE LIST":
      const ret = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (i === 0) {
          ret.push(1);
        } else {
          ret.push(0);
        }
      }
      return ret;
    case "CHANGE VISIBLE LIST":
      const copy = state 
      copy[action.payload.index] = action.payload.value
      return copy;
    default:
      return state;
  }
};
export default visibility;
