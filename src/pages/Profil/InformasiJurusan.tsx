import SectionTitle from "@/components/SectionTitle";
import Informasi from "@/components/App/Profil/InformasiJurusan/Informasi";
import VisiMisi from "@/components/App/Profil/InformasiJurusan/VisiMisi";

export default function InformasiJurusan() {
  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Informasi Jurusan" />
        </div>
      </section>
      <Informasi />
      <VisiMisi />
    </>
  );
}
