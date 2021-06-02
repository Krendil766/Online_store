import React, { createContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import UserStore from "./store/UserStore";
import store from './store';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
