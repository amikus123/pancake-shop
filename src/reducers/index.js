import counter from "./counter";
import visibility from "./visibility";
import categories from "./categories";

import {combineReducers} from "redux";


const allReducer = combineReducers({
  counter,
  visibility,
  categories,
})
export default allReducer;