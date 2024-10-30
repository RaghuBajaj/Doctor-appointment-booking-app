import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ItemContextProvider from "./Context";
import App from "./App";
import App1 from "./AdminComponents/App1"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ItemContextProvider>
      <React.StrictMode>
        <App />
        <App1/>
      </React.StrictMode>
    </ItemContextProvider>
  </BrowserRouter>
);
 
reportWebVitals();
