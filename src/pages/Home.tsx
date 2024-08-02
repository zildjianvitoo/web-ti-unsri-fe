import Berita from "@/components/App/Home/Berita";
import Hero from "@/components/App/Home/Hero";
import InformasiJurusan from "@/components/App/Home/InformasiJurusan";
import Pengumuman from "@/components/App/Home/Pengumuman";
import ProfilJurusan from "@/components/App/Home/ProfilJurusan";
import TenagaPendidik from "@/components/App/Home/TenagaPendidik";

export default function Home() {
  return (
    <>
      <Hero />
      <InformasiJurusan />
      <ProfilJurusan />
      <Berita />
      <Pengumuman />
      <TenagaPendidik />
    </>
  );
}
