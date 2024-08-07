import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getAllBerita, getBeritaBySlug } from "@/lib/network-data/berita";
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

  const {
    data: data2,
    isLoading: isLoading2,
    error: error2,
  } = useQuery({
    queryFn: async () => {
      const { berita } = await getAllBerita({ pageIndex: 0 });
      return berita;
    },
    queryKey: ["berita"],
  });

  if (isLoading || isLoading2) return <LoadingScreen />;

  if (error || error2) return <ErrorScreen />;

  return (
    <section
      className="mx-auto gap-5 px-4 lg:mt-16 lg:flex lg:flex-row lg:justify-between lg:px-12 xl:px-20"
      id="berita-detail"
    >
      <div className="flex flex-col gap-6 lg:w-3/5 lg:gap-5">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-3xl font-semibold md:text-xl lg:text-3xl">
            {data?.judul}
          </h1>
          <div className="flex flex-row items-center gap-2">
            <FaCalendar className="size-5 text-[#5c5839] dark:text-white" />
            <p className="mt-[2px] text-sm font-medium md:text-base">
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
          <div
            className="article text-lg md:text-lg"
            dangerouslySetInnerHTML={{ __html: data?.konten || "" }}
          ></div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-2/5 lg:flex-col">
        <h1 className="mb-10 text-2xl font-semibold">Berita Lainnya</h1>
        {data2?.slice(0, 5).map((item) => (
          <a
            className="group flex flex-col items-center gap-3 border-b-[1px] py-4 lg:flex-row"
            href={`/berita/${item.slug}`}
          >
            <figure className="h-full overflow-hidden rounded-md bg-gray-800 md:basis-[40%]">
              <img
                src={item?.thumbnail}
                alt="Vector Informasi Jurusan "
                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.03]"
              />
            </figure>
            <div className="flex flex-col gap-2 md:basis-[60%]">
              <h3 className="!line-clamp-1 text-lg font-semibold">
                {item?.judul}
              </h3>
              <div
                className="text-md line-clamp-3"
                dangerouslySetInnerHTML={{ __html: item?.konten || "" }}
              ></div>
              <p className="text-sm font-medium">
                {formatDateTimeID(item?.tanggalDibuat)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
