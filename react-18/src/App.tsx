import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./components/public/login/LoginScreen";
import SignUpScreen from "./components/public/signup/SignUpScreen";
import SuccessScreen from "./components/public/SuccessScreen";
import ProfileScreen from "./components/auth/ProfileScreen";
import EditProfileScreen from "./components/auth/EditProfileScreen";
import ConfirmationScreen from "./components/auth/ConfirmationScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/editprofile" element={<EditProfileScreen />} />
        <Route path="/confirm" element={<ConfirmationScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
