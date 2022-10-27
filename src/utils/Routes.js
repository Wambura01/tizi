import { useParams, useRoutes } from "react-router-dom";

import Homepage from "../components/HomePage/homepage";
import Login from "../components/Login/login";
import Days from "../components/Days/days";
import Day from "../components/Day/day";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    { path: "/", element: <Homepage /> },
    {
      path: "days",
      element: <Days />,
    },

    {
      path: "day/:day",
      element: <Day />,
    },
    ,
  ]);

  return routes;
};

export default Routes;
