import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import Sign_in from "../pages/Sign_in";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import RegisterBroMo from "../pages/auth/BroMoRegister";
import RegisterFreeMo from "../pages/auth/FreeMoRegister";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/dark",
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register-freemo",
    element: <RegisterFreeMo />,
  },
  {
    path: "/register-bromo",
    element: <RegisterBroMo />,
  },
]);
