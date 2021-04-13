import visibilityInt from "./visibilityInt";
import visibility from "./visibility";
import categories from "./categories";

import {combineReducers} from "redux";


const allReducer = combineReducers({
  visibility,
  categories,
  visibilityInt,
})
export default allReducer;