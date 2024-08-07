import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTitle from "@/components/SectionTitle";
import { getAllKurikulum } from "@/lib/network-data/kurikulum";
import { useQuery } from "@tanstack/react-query";
import { CgArrowTopRight, CgSoftwareDownload } from "react-icons/cg";

export default function Kurikulum() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllKurikulum,
    queryKey: ["kurikulum"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Kurikulum" />
        </div>
        <div className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:w-4/5 lg:px-12 xl:px-20">
          {data?.map((item, index) => (
            <div className="flex flex-col gap-2" key={index + "kurikulum"}>
              <h1 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-2xl font-bold text-transparent lg:text-5xl">
                {item.nama}
              </h1>
              <p className="text-sm lg:text-lg">{item.deskripsi}</p>
              <div className="flex flex-row gap-2">
                <a
                  className="flex justify-between gap-2 rounded-full bg-red-400 px-4 py-1 font-medium text-white max-md:text-sm"
                  href={item.file}
                  download
                >
                  Unduh
                  <CgSoftwareDownload className="text-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
