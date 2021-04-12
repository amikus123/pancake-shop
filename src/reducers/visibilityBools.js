const visibility = (state = [], action) => {
  switch (action.type) {
    case "CREATE VISIBLEBOOL LIST":
      const ret = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (i === 0) {
          // ret.push(true);
          ret.push(true);

        } else {
          ret.push(false);

          // ret.push(false);
        }
      }
      return ret;
    case "CHANGE VISIBLEBOOL LIST":
      return action.payload.value;
    default:
      return state;
  }
};
export default visibility;
