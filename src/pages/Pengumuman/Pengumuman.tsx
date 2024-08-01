import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTitle from "@/components/SectionTitle";
import { getAllPengumuman } from "@/lib/network-data/pengumuman";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar } from "react-icons/fa";

import PaginationButton from "@/components/PaginationButton";
import { useFilters } from "@/hooks/useFilters";
import { useState } from "react";

// const dummyData = [
//   {
//     image: "/images/carousel-image.png",
//     title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
//     date: "29 Jan 2024",
//     description:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
//   },
//   {
//     image: "/images/carousel-image.png",
//     title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
//     date: "29 Jan 2024",
//     description:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
//   },
//   {
//     image: "/images/carousel-image.png",
//     title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
//     date: "29 Jan 2024",
//     description:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
//   },
//   {
//     image: "/images/carousel-image.png",
//     title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
//     date: "29 Jan 2024",
//     description:
//       " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
//   },
// ];

export default function Pengumuman() {
  const [total, setTotal] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);

  const { filters, setFilters } = useFilters();

  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      const { pengumuman, paginasi } = await getAllPengumuman(filters);
      setTotal(paginasi.totalItem);
      return pengumuman;
    },
    queryKey: ["pengumuman", filters],
  });

  const paginationNumber = Math.ceil(total / 10);

  const handlePagination = (index: number) => {
    if (index >= 0 && index < paginationNumber) {
      setPageIndex(pageIndex);
      setFilters({
        pageIndex: index.toString(),
      });
    }
  };

  if (isLoading) return <LoadingScreen />;

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
                      {item.tanggalDibuat}
                    </p>
                  </div>
                  <p>{item.konten}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <PaginationButton
        paginationNumber={paginationNumber}
        pageIndex={pageIndex}
        handlePagination={handlePagination}
      />
    </section>
  );
}
