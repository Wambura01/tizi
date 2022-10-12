import { Navigate } from "react-router";
import { useRoutes } from "react-router-dom";

import Homepage from "../components/HomePage/homepage";
import Login from "../components/Login/login";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "login",
      element: <Login />,
    },
    { path: "home", element: <Homepage /> },
  ]);

  return routes;
};

export default Routes;
