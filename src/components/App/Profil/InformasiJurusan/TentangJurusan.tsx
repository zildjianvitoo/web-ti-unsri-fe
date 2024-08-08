import img from "@/../public/images/fasilkom.jpg";
import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import { getAllInformasiJurusan } from "@/lib/network-data/informasiJurusan";
import { useQuery } from "@tanstack/react-query";

export default function TentangJurusan() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllInformasiJurusan,
    queryKey: ["informasi-jurusan"],
  });

  if (!data || isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      id="tentang-jurusan"
      className="mt-20 w-full gap-4 px-4 max-md:flex max-md:flex-col md:gap-8 lg:px-12 xl:px-20"
    >
      <div className="float-left mr-5 overflow-hidden rounded-2xl md:h-96 lg:w-3/6 xl:w-2/6">
        <img
          src={img}
          alt="img-informasijurusan"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-justify text-base leading-5 md:text-lg md:leading-6 lg:gap-2">
        <h1 className="text-center text-2xl font-bold md:text-start md:text-4xl">
          Teknik Informatika
        </h1>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-start md:text-2xl lg:mb-0">
          Universitas Sriwijaya
        </h3>
        <div
          className="block text-justify text-lg"
          dangerouslySetInnerHTML={{ __html: data?.informasi || "" }}
        ></div>
      </div>
    </section>
  );
}
