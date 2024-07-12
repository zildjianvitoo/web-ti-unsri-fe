import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman/Pengumuman";

const RouterBuilder = () => {
  //Only for client to see
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pengumuman",
      element: <Pengumuman />,
    },

    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  //Login,register,etc

  //Only for admin to see
  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ]);

  return routes;
};

export default RouterBuilder;
