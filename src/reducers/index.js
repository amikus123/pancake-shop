import visibilityInt from "./visibilityInt";
import visibility from "./visibility";
import categories from "./categories";
import forcedNumber from "./forcedNumber";

import {combineReducers} from "redux";


const allReducer = combineReducers({
  visibility,
  categories,
  visibilityInt,
  forcedNumber,
})
export default allReducer;