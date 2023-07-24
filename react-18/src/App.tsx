import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./components/public/login/LoginScreen";
import SignUpScreen from "./components/public/signup/SignUpScreen";
import SuccessScreen from "./components/public/SuccessScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
