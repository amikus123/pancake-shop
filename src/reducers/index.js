import visibilityInt from "./visibilityInt";
import visibility from "./visibility";
import cart from "./cart";

import categories from "./categories";
import forcedNumber from "./forcedNumber";

import {combineReducers} from "redux";


const allReducer = combineReducers({
  visibility,
  cart,
  categories,
  visibilityInt,
  forcedNumber,
})
export default allReducer;