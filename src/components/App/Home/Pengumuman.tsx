import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getAllPengumuman } from "@/lib/network-data/pengumuman";
import { useQuery } from "@tanstack/react-query";

export default function Pengumuman() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllPengumuman,
    queryKey: ["pengumuman"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="pengumuman"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-3xl font-bold md:text-4xl">Pengumuman</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-y-10">
          {data?.map((item, index) => (
            <a
              className="flex flex-col items-center gap-4 lg:flex-row"
              key={`berita-${index}`}
            >
              <figure className="h-full bg-gray-800 md:basis-[25%]">
                <img
                  src={item.thumbnail}
                  alt="Vector Informasi Jurusan "
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="flex flex-col gap-4 md:basis-[75%]">
                <h3 className="text-lg font-medium md:text-xl">{item.judul}</h3>
                <p className="line-clamp-4 text-justify">{item.konten}</p>
                <p className="text-lg font-medium">
                  {formatDateTimeID(item.tanggalDibuat)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
