import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import "bootstrap/dist/css/bootstrap.min.css";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";

//import "./assets/scss/now-ui-kit.scss";

// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />

    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      rel="stylesheet"
    />
    <link
      href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      rel="stylesheet"
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
