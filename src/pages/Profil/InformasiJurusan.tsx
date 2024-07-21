import SectionTitle from "@/components/SectionTitle";

import VisiMisi from "@/components/App/Profil/InformasiJurusan/VisiMisi";
import TentangJurusan from "@/components/App/Profil/InformasiJurusan/TentangJurusan";

export default function InformasiJurusan() {
  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Informasi Jurusan" />
        </div>
      </section>
      <TentangJurusan />
      <VisiMisi />
    </>
  );
}
