  // -1 means that user has not clicked
const forcedNumber = (state = -1, action) => {
  switch (action.type) {
    case "NUMBER CHANGED":
      return action.payload.value;
    default:
      return state;
  }
};
export default forcedNumber;
