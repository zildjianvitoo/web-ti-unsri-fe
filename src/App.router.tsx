import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman/Pengumuman";
import PengumumanDetail from "./pages/Pengumuman/PengumumanDetail";
import Berita from "./pages/Berita/Berita";
import BeritaDetail from "./pages/Berita/BeritaDetail";

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
      path: `/pengumuman/:pengumumanId`,
      element: <PengumumanDetail />,
    },
    {
      path: `/berita`,
      element: <Berita />,
    },
    {
      path: `/berita/:beritaId`,
      element: <BeritaDetail />,
    },

    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ]);

  return routes;
};

export default RouterBuilder;
