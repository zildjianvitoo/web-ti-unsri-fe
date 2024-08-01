import AdministrasiJurusan from "@/components/App/Profil/StrukturJabatan/AdministrasiJurusan";
import JabatanJurusan from "@/components/App/Profil/StrukturJabatan/JabatanJurusan";
import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTitle from "@/components/SectionTitle";
import { getStrukturJabatan } from "@/lib/network-data/strukturJabatan";
import { useQuery } from "@tanstack/react-query";

export default function StrukturJabatan() {
  const { data, isLoading, error } = useQuery({
    queryFn: getStrukturJabatan,
    queryKey: ["struktur-jabatan"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Struktur Jabatan" />
        </div>
      </section>
      <JabatanJurusan data={data?.pimpinan || []} />
      <AdministrasiJurusan data={data?.admin || []} />
    </>
  );
}
