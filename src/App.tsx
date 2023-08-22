import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import "./App.css"
const App: React.FC = () => {
  return (
    <div className="App">
    <Router >
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
