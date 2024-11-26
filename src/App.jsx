import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
