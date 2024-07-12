import Berita from "@/components/App/Home/Berita";
import InformasiJurusan from "@/components/App/Home/InformasiJurusan";
import Pengumuman from "@/components/App/Home/Pengumuman";
import TenagaPendidik from "@/components/App/Home/TenagaPendidik";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Ubah tema
      </button>
      <button onClick={() => setTheme("dark")}>Ubah tema dark</button>
      <InformasiJurusan />
      <Berita />
      <Pengumuman />
      <TenagaPendidik />
    </>
  );
}
