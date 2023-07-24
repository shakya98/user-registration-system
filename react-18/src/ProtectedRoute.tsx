import React from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";

type Props = RouteProps & {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProtectedRoute = ({ isAuth, setIsAuth, ...routeProps }: Props) => {
  if (isAuth) {
    setIsAuth(true);
    return <Outlet />;
  }
  console.log(isAuth);
  return <Navigate to="/" />;
};

export default ProtectedRoute;
