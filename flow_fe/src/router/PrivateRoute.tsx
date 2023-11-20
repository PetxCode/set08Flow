import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")!);

  return <div>{user ? <div>{children}</div> : <Navigate to="/signin" />}</div>;
};

export default PrivateRoute;
