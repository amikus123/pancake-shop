const visibility = (state = [], action) => {
  switch (action.type) {
    case "CREATE VISIBLE LIST":
      const ret = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (i === 0) {
          ret.push(true);
        } else {
          ret.push(false);
        }
      }
      return ret;
    case "CHANGE VISIBLE LIST":
      return [
        ...state.slice(0, action.payload.index),
        action.payload.value,
        ...state.slice(action.payload.index ),
      ];
    default:
      return state;
  }
};
export default visibility;
