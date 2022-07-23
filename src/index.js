import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ApiProvider from "./api";
import { Home } from "./layout/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ApiProvider>
      <App />
    </ApiProvider>
  </Provider>
);
