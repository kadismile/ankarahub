import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "toastr/build/toastr.min.css";

const persistedState = localStorage.getItem("ankaraHub")
  ? JSON.parse(localStorage.getItem("ankaraHub"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(function() {
  localStorage.setItem("ankaraHub", JSON.stringify(store.getState()));
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
