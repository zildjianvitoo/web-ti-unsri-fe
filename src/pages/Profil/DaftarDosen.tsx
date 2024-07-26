import DosenPengajar from "@/components/App/Profil/DaftarDosen/DosenPengajar";
import SectionTitle from "@/components/SectionTitle";

export default function DaftarDosen() {
  return (
    <>
      <section id="title-page">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Dosen Pengajar" />
        </div>
      </section>
      <DosenPengajar />
    </>
  );
}
