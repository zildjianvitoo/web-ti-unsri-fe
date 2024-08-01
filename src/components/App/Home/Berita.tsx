import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getAllBerita } from "@/lib/network-data/berita";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar } from "react-icons/fa";

export default function Berita() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllBerita,
    queryKey: ["berita"],
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="berita"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-center text-3xl font-bold md:text-4xl">Berita</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data?.slice(0, 3).map((item, index) => (
            <a
              className="group flex flex-col gap-4"
              key={`berita-${index}`}
              href={`/berita/${item.slug}`}
            >
              <div className="max-h-72 w-full overflow-hidden rounded-md">
                <img
                  src={item.thumbnail}
                  alt="Berita"
                  className="object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {item.judul}
                </h3>
                <div className="flex gap-1">
                  <FaCalendar className="size-5 text-[#5c5839] dark:text-white" />
                  <p className="text-sm">
                    {formatDateTimeID(item.tanggalDibuat)}
                  </p>
                </div>
              </div>
              <div
                className="line-clamp-5 text-justify"
                dangerouslySetInnerHTML={{ __html: item.konten || "" }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
