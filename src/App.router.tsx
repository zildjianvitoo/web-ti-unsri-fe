import { Navigate, createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman/Pengumuman";
import PengumumanDetail from "./pages/Pengumuman/PengumumanDetail";
import Berita from "./pages/Berita/Berita";
import BeritaDetail from "./pages/Berita/BeritaDetail";
import InformasiJurusan from "./pages/Profil/InformasiJurusan";
import ProfilLulusan from "./pages/Profil/ProfilLulusan";
import StrukturJabatan from "./pages/Profil/StrukturJabatan";
import DaftarDosen from "./pages/Profil/DaftarDosen";
import InformasiDosen from "./pages/Dosen/InformasiDosen";
import SaranaPrasarana from "./pages/Profil/SaranaPrasarana";
// import StrukturJabatan from "./pages/Profil/StrukturJabatan";

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
      path: "/pengumuman/:pengumumanId",
      element: <PengumumanDetail />,
    },
    {
      path: "/berita",
      element: <Berita />,
    },
    {
      path: "/berita/:beritaId",
      element: <BeritaDetail />,
    },
    {
      path: "/profil/informasi-jurusan",
      element: <InformasiJurusan />,
    },
    {
      path: "/profil/profil-lulusan",
      element: <ProfilLulusan />,
    },
    {
      path: "/profil/struktur-jabatan",
      element: <StrukturJabatan />,
    },
    {
      path: "/profil/daftar-dosen",
      element: <DaftarDosen />,
    },
    {
      path: "/profil/sarana-prasarana",
      element: <SaranaPrasarana />,
    },
    {
      path: "/dosen/:id",
      element: <InformasiDosen />,
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
