import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import formatDateTimeID from "@/lib/formatDateTimeID";
import { getPengumumanBySlug } from "@/lib/network-data/pengumuman";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function PengumumanDetail() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryFn: () => getPengumumanBySlug(slug!),
    queryKey: ["pengumuman", slug],
    enabled: !!slug,
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 flex justify-center px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="pengumuman-detail"
    >
      <div className="flex flex-col gap-6 lg:w-4/5 lg:gap-5">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-xl font-semibold !leading-6 md:text-xl lg:text-3xl">
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
              alt="Dummy"
              className="w-full object-contain"
            />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: data?.konten || "" }} />
        </div>
      </div>
    </section>
  );
}
