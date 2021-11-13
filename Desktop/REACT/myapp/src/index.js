import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/navbar.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducer/reducer";
import { provider } from "react-redux";

const store = createStore(reducer,   {users:  [ 'abhi,  akshay, "sonu"]});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
