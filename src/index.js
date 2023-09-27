import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Provider as AlertProvider, transitions, positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import reportWebVitals from './reportWebVitals';

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "./alert-styles.css"; 


const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,

 
  
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
