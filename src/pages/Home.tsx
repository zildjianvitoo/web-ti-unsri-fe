import Berita from "@/components/App/Home/Berita";
import InformasiJurusan from "@/components/App/Home/InformasiJurusan";
import Pengumuman from "@/components/App/Home/Pengumuman";
import TenagaPendidik from "@/components/App/Home/TenagaPendidik";

export default function Home() {
  return (
    <>
      <InformasiJurusan />
      <Berita />
      <Pengumuman />
      <TenagaPendidik />
    </>
  );
}
