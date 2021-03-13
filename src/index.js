import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reducer from "./reducer/reducer";
import { createStore } from "redux";
import {Provider} from "react-redux"

const initVal = {
  isDropDown:false,
  cartItems:[]

};
const store = createStore(reducer, initVal);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
