import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from "@/../public/images/fasilkom.jpg";
import { getAllInformasiJurusan } from "@/lib/network-data/informasiJurusan";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorScreen from "@/components/ErrorScreen";
import { useQuery } from "@tanstack/react-query";

export default function InformasiJurusan() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllInformasiJurusan,
    queryKey: ["informasi-jurusan"],
  });

  if (!data || isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="informasi-jurusan"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex min-h-[20rem] basis-7/12 flex-col justify-center gap-4 rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 p-6 sm:p-10 md:p-12 lg:rounded-xl lg:p-[60px]">
          <h1 className="text-3xl font-bold lg:text-[40px]">
            Informasi Jurusan
          </h1>
          <h3 className="text-xl lg:text-2xl">Teknik Informatika</h3>
          <div
            className="line-clamp-3 text-justify"
            dangerouslySetInnerHTML={{ __html: data?.informasi || "" }}
          ></div>
          <Link
            className="mt-2 flex w-fit items-center gap-1 break-all rounded-full border bg-white px-3 py-1 text-black outline-none ring-0 lg:px-6"
            to="/profil/informasi-jurusan"
          >
            Info Lanjut
            <FiArrowUpRight className="size-5" />
          </Link>
        </div>
        <div className="relative flex min-h-[20rem] basis-5/12 flex-col justify-center gap-4 overflow-hidden rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 lg:rounded-xl">
          <div className="absolute h-full w-full bg-gradient-to-br from-primary/70 to-secondary/70 opacity-60" />
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
      <article className="flex"></article>
    </section>
  );
}
