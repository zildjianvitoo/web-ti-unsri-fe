import KompetensiPendukung from "@/components/App/Profil/ProfilJurusan/KompetensiPendukung";
import KompetensiUtama from "@/components/App/Profil/ProfilJurusan/KompetensiUtama";
import SectionTitle from "@/components/SectionTitle";

export default function ProfilLulusan() {
  return (
    <>
      <section id="profil-lulusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Profil Lulusan" />
        </div>
      </section>
      <KompetensiUtama />
      <KompetensiPendukung />
    </>
  );
}
