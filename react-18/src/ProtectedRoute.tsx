import React from "react";
import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";
import Layout from "./components/layout/Layout";

type Props = RouteProps & {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: any;
};

const ProtectedRoute = ({ isAuth, setIsAuth, userInfo, ...routeProps }: Props) => {
  if (isAuth) {
    setIsAuth(true);
    return (
      <Layout userInfo={userInfo}>
        <Outlet />
      </Layout>
    );
  }
  console.log(isAuth);
  return <Navigate to="/" />;
};

export default ProtectedRoute;
