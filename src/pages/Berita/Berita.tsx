import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import PaginationButton from "@/components/PaginationButton";
import { useFilters } from "@/hooks/useFilters";
import { getAllBerita } from "@/lib/network-data/berita";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa";

export default function Berita() {
  const [total, setTotal] = useState(0);

  const { filters, setFilters } = useFilters();

  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const { berita, paginasi } = await getAllBerita(filters);
      setTotal(paginasi.totalItem);
      return berita;
    },
    queryKey: ["berita", filters],
  });

  const paginationNumber = Math.ceil(total / 10);

  const handlePagination = (index: number) => {
    console.log(index);
    if (index >= 1 && index <= paginationNumber) {
      setFilters({
        pageIndex: index.toString(),
      });
    }
  };

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="berita"
    >
      <div className="flex flex-col gap-5 md:flex-row md:gap-7">
        <a
          className="relative flex max-md:flex-col lg:basis-3/5"
          href={`/berita/${data?.at(0)?.slug}`}
        >
          <img
            src={data?.at(0)?.thumbnail}
            alt={data?.at(0)?.judul}
            className="h-80 w-full rounded-md object-cover md:h-auto"
          />
          <figcaption className="glassmorphism absolute bottom-0 left-0 flex w-full flex-col gap-2 rounded-none p-4 md:h-1/2 lg:h-[40%] lg:p-8 xl:h-[35%]">
            <h3 className="text-lg font-semibold max-sm:!leading-6 md:text-2xl">
              {data?.at(0)?.judul}
            </h3>
            <p className="line-clamp-2 text-base md:text-lg">
              {data?.at(0)?.konten}
            </p>
          </figcaption>
        </a>
        <div className="flex flex-col gap-7 max-md:hidden lg:basis-2/5">
          {data?.slice(1, 4).map((berita, index) => (
            <a
              key={index}
              className="flex flex-col gap-3 md:flex-row lg:gap-4"
              href={`/berita/${berita.slug}`}
            >
              <figure className="relative flex lg:basis-[40%]">
                <img
                  src={berita.thumbnail}
                  alt={berita.judul}
                  className="rounded-md object-cover"
                />
              </figure>
              <div className="flex flex-col gap-3 lg:basis-[60%]">
                <h4 className="text-lg font-semibold md:text-xl">
                  {berita.judul}
                </h4>
                <p className="font-medium">
                  {new Date(berita.tanggalDibuat).toLocaleDateString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {data?.slice(4).map((berita, index) => (
          <a
            key={index}
            className="flex flex-col gap-4"
            href={`/berita/${berita.slug}`}
          >
            <div className="h-3/6 w-full overflow-hidden rounded-md">
              <img
                src={berita.thumbnail}
                alt={berita.judul}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-3/6 flex-col gap-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                {berita.judul}
              </h3>
              <div className="flex gap-2">
                <FaCalendar className="size-4 text-[#5c5839] dark:text-white" />
                <p className="text-sm">
                  {new Date(berita.tanggalDibuat).toLocaleDateString()}
                </p>
              </div>
              <p className="text-justify">{berita.konten}</p>
            </div>
          </a>
        ))}
      </div>
      <PaginationButton
        paginationNumber={paginationNumber}
        pageIndex={filters.pageIndex ? +filters.pageIndex : 1}
        handlePagination={handlePagination}
      />
    </section>
  );
}
