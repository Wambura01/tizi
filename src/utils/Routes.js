import { useRoutes } from "react-router-dom";

import Homepage from "../components/HomePage/homepage";
import Login from "../components/Login/login";
import Days from "../components/Days/days";
import Day from "../components/Day/day";
import AdminPortal from "../components/Portal/portal";
import Register from "../components/Login/register";
import Enroll from "../components/Enroll/enroll";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "enroll",
      element: <Enroll />,
    },
    { path: "/", element: <Homepage /> },
    {
      path: "days",
      element: <Days />,
    },
    {
      path: "admin-portal",
      element: <AdminPortal />,
    },
    {
      path: "day/:day",
      element: <Day />,
    },
  ]);

  return routes;
};

export default Routes;
