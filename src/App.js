import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AHPpage from "./pages/ahp";
import TOPSISpage from "./pages/topsis";
import Info from "./pages/info";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ahp" element={<AHPpage />} />
        <Route exact path="/topsis" element={<TOPSISpage />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
