import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page - You are logged in!</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
