import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./js/store/index";
import App from "./js/components/App.jsx";
import "./js/languages/i18n"

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);