import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTitle from "@/components/SectionTitle";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getAllPengumuman } from "@/lib/network-data/pengumuman";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar } from "react-icons/fa";

export default function Pengumuman() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllPengumuman,
    queryKey: ["pengumuman"],
  });

  if (error) return <ErrorScreen />;

  return (
    <section id="pengumuman">
      <div className="flex flex-col gap-8 lg:gap-10">
        <SectionTitle title="Pengumuman" />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 px-4 md:grid-cols-2 md:gap-y-12 lg:mt-10 lg:grid-cols-3 lg:px-12 xl:px-20">
            {data?.map((item, index) => (
              <a
                key={index}
                className="flex flex-col gap-4"
                href={`/pengumuman/${item.slug}`}
              >
                <figure>
                  <img
                    src={item.thumbnail}
                    alt="Dummy"
                    className="rounded-md"
                  />
                </figure>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {item.judul}
                  </h3>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="size-4 text-[#5c5839] dark:text-white" />
                    <p className="mt-[2px] text-sm font-medium text-[#696969] dark:text-white">
                      {formatDateTimeID(item.tanggalDibuat)}
                    </p>
                  </div>
                  <p>{item.konten}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
