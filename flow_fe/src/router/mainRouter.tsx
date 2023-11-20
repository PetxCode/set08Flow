import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
import Sign_in from "../pages/Sign_in";
import PrivateRoute from "./PrivateRoute";
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
    path: "/signin",
    element: <Sign_in />,
  },
]);
