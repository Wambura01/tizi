import { useRoutes } from "react-router-dom";

import Homepage from "../components/HomePage/homepage";
import Login from "../components/Login/login";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    { path: "/", element: <Homepage /> },
  ]);

  return routes;
};

export default Routes;
