import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlasmusLanding from "./components/PlasmusLanding";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlasmusLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;