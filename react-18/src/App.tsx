import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "./components/public/login/LoginScreen";
import SignUpScreen from "./components/public/signup/SignUpScreen";
import SuccessScreen from "./components/public/SuccessScreen";
import ProfileScreen from "./components/auth/ProfileScreen";
import EditProfileScreen from "./components/auth/EditProfileScreen";
import ConfirmationScreen from "./components/auth/ConfirmationScreen";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("access_token") ? true : false
  );
  const [userInfo, setUserInfo] = useState<any>(null);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
        <Route
          path="/"
          element={<ProtectedRoute isAuth={isAuth} setIsAuth={setIsAuth} userInfo={userInfo} />}
        >
          <Route path="/profile" element={<ProfileScreen setUserInfo={setUserInfo}/>} />
          <Route path="/editprofile" element={<EditProfileScreen />} />
          <Route path="/confirm" element={<ConfirmationScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
