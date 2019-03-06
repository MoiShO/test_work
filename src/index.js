import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./js/store/index";
import App from "./App.jsx";
import "./js/components/languages/i18n"

// Тестирование ререндера

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
