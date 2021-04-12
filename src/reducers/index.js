import visibilityBools from "./visibilityBools";
import visibility from "./visibility";
import categories from "./categories";

import {combineReducers} from "redux";


const allReducer = combineReducers({
  visibility,
  categories,
  visibilityBools,
})
export default allReducer;