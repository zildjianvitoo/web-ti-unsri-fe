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
import Kurikulum from "./pages/Akademik/Kurikulum";
import PanduanSOP from "./pages/Akademik/PanduanSOP";
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
      path: "/pengumuman/:slug",
      element: <PengumumanDetail />,
    },
    {
      path: "/berita",
      element: <Berita />,
    },
    {
      path: "/berita/:slug",
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
      path: "/dosen/:slug",
      element: <InformasiDosen />,
    },
    {
      path: "/akademik/kurikulum",
      element: <Kurikulum />,
    },
    {
      path: "/akademik/panduan-sop",
      element: <PanduanSOP />,
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
