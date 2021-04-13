import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/general/ScrollToTop";
// redux
import { createStore } from "redux";
import allReducer from "./reducers";
import {Provider} from "react-redux";
const myStore = createStore(
  allReducer,
  // chrome redux extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>22
    <Provider store={myStore}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
