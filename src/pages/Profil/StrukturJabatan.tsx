import AdministrasiJurusan from "@/components/App/Profil/StrukturJabatan/AdministrasiJurusan";
import JabatanJurusan from "@/components/App/Profil/StrukturJabatan/JabatanJurusan";
import SectionTitle from "@/components/SectionTitle";

export default function StrukturJabatan() {
  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Struktur Jabatan" />
        </div>
      </section>
      <JabatanJurusan />
      <AdministrasiJurusan />
    </>
  );
}
