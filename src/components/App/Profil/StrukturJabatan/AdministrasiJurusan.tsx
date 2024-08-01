import TenagaPendidikCard from "@/components/TenagaPendidikCard";
import { Admin } from "@/types/strukturJabatan";

export default function AdministrasiJurusan({ data }: { data: Admin[] }) {
  return (
    <section
      id="administrasi-jurusan"
      className="mt-20 w-full px-4 lg:px-12 xl:px-20"
    >
      <h1 className="w-full text-center text-2xl font-bold lg:text-3xl">
        Administrasi
      </h1>
      <div className="mt-5 flex flex-row justify-center gap-5 lg:gap-8">
        {data.map((data, index) => (
          <TenagaPendidikCard teacher={data} key={index} />
        ))}
      </div>
    </section>
  );
}
