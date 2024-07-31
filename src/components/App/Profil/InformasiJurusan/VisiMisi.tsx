import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import { getAllInformasiJurusan } from "@/lib/network-data/informasiJurusan";
import { useQuery } from "@tanstack/react-query";
import { BsPeopleFill } from "react-icons/bs";

export default function VisiMisi() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllInformasiJurusan,
    queryKey: ["informasi-jurusan"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section id="visi-misi" className="mt-14">
      <div className="flex w-full flex-col gap-8 px-4 lg:flex-row lg:gap-10 lg:px-12 xl:px-20">
        <div className="flex w-full items-center lg:w-5/12">
          <div className="flex flex-col gap-2 text-center lg:text-start">
            <h3 className="text-2xl lg:text-4xl">Visi</h3>
            <h1 className="text-2xl font-bold lg:text-4xl">
              {data?.visi.judul}
            </h1>
            <p className="text-center leading-6 lg:mt-3 lg:text-justify lg:text-lg">
              {data?.visi.deskripsi}
            </p>
          </div>
        </div>
        <h3 className="-mb-7 text-center text-2xl lg:mb-0 lg:hidden lg:text-start lg:text-4xl">
          Misi
        </h3>
        <div className="gap-8 md:flex md:flex-row lg:w-7/12">
          <div className="w-full md:w-6/12 lg:w-6/12">
            <div className="flex flex-col gap-4">
              <h3 className="hidden md:text-xl lg:block lg:text-4xl">Misi</h3>
              {data?.misi.slice(0, 2).map((item, index) => (
                <div
                  className="flex flex-col items-center gap-1 text-center lg:text-start"
                  key={index}
                >
                  <BsPeopleFill className="text-7xl text-green-300" />
                  <h4 className="text-xl font-bold lg:text-2xl">
                    {item.judul}
                  </h4>
                  <p className="text-center leading-6 lg:mt-2 lg:text-justify lg:text-lg">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-6/12 lg:pt-28">
            <div className="flex flex-col gap-4">
              {data?.misi.slice(2, 4).map((item, index) => (
                <div
                  className="flex flex-col items-center gap-1 text-center lg:text-start"
                  key={index}
                >
                  <BsPeopleFill className="text-7xl text-green-300" />
                  <h4 className="text-center text-xl font-bold lg:text-start lg:text-2xl">
                    {item.judul}
                  </h4>
                  <p className="text-center leading-6 lg:text-justify lg:text-lg">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
