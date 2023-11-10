import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AHPpage from "./pages/ahp";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ahp" element={<AHPpage />} />
      </Routes>
    </Router>
  );
}

export default App;
