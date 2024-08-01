import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getBeritaBySlug } from "@/lib/network-data/berita";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function BeritaDetail() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getBeritaBySlug(slug!),
    queryKey: ["berita", slug],
    enabled: !!slug,
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="berita-detail"
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {data?.judul}
          </h1>
          <div className="mt-2 flex gap-2">
            <FaCalendar className="size-8 text-[#5c5839] dark:text-white" />
            <p className="mt-[2px] text-xl font-medium md:text-2xl">
              {formatDateTimeID(data?.tanggalDibuat)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <figure className="w-full">
            <img
              src={data?.thumbnail}
              alt={data?.judul}
              className="w-full object-contain"
            />
          </figure>
          <p
            className="text-lg md:text-lg"
            dangerouslySetInnerHTML={{ __html: data?.konten || "" }}
          ></p>
        </div>
      </div>
    </section>
  );
}
