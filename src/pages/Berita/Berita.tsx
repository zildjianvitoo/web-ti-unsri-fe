import ErrorScreen from "@/components/ErrorScreen";
import LoadingScreen from "@/components/LoadingScreen";
import { getAllBerita } from "@/lib/network-data/berita";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Berita as BeritaType } from "@/types/berita";

export default function Berita() {
  const [beritaTerbaru, setBeritaTerbaru] = useState<BeritaType | null>(null);
  const [beritaTerbaruLainnya, setBeritaTerbaruLainnya] = useState<
    BeritaType[]
  >([]);
  const [beritaSisa, setBeritaSisa] = useState<BeritaType[]>([]);

  const { data, isLoading, error } = useQuery({
    queryFn: getAllBerita,
    queryKey: ["berita"],
  });

  useEffect(() => {
    if (data) {
      const sorted = data.sort(
        (a, b) =>
          new Date(b.tanggalDibuat).getTime() -
          new Date(a.tanggalDibuat).getTime(),
      );
      setBeritaTerbaru(sorted[0]);
      setBeritaTerbaruLainnya(sorted.slice(1, 4));
      setBeritaSisa(sorted.slice(4));
    }
  }, [data]);

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="berita"
    >
      <a
        className="flex flex-col gap-5 md:flex-row md:gap-7"
        href={`/berita/${beritaTerbaru?.slug}`}
      >
        <figure className="relative flex max-md:flex-col lg:basis-3/5">
          <img
            src={beritaTerbaru?.thumbnail}
            alt={beritaTerbaru?.judul}
            className="rounded-md object-cover"
          />
          <figcaption className="glassmorphism absolute bottom-0 left-0 hidden w-full flex-col gap-2 rounded-none p-4 md:flex md:h-1/2 lg:h-[40%] lg:p-8 xl:h-[35%]">
            <h3 className="text-xl font-semibold md:text-2xl">
              {beritaTerbaru?.judul}
            </h3>
            <p className="text-lg">{beritaTerbaru?.konten}</p>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-7 max-md:hidden lg:basis-2/5">
          {beritaTerbaruLainnya?.map((berita, index) => (
            <a
              key={index}
              className="flex flex-col gap-3 md:flex-row lg:gap-4"
              href={`/berita/${berita.slug}`}
            >
              <figure className="relative flex lg:max-w-[50%]">
                <img
                  src={berita.thumbnail}
                  alt={berita.judul}
                  className="rounded-md object-cover"
                />
              </figure>
              <div className="flex flex-col gap-3">
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
      </a>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {beritaSisa.map((berita, index) => (
          <a
            key={index}
            className="flex flex-col gap-4"
            href={`/berita/${berita.slug}`}
          >
            <img
              src={berita.thumbnail}
              alt={berita.judul}
              className="rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                {berita.judul}
              </h3>
              <div className="flex gap-2">
                <FaCalendar className="size-4 text-[#5c5839] dark:text-white" />
                <p className="text-sm">
                  {new Date(berita.tanggalDibuat).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-justify">{berita.konten}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
