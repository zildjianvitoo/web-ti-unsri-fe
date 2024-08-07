import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function InformasiJurusan() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="informasi-jurusan"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex min-h-[20rem] flex-col justify-center gap-4 rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 p-6 sm:p-10 md:p-12 lg:rounded-xl lg:p-[60px]">
          <h1 className="text-3xl font-bold lg:text-[40px]">
            Informasi Jurusan
          </h1>
          <h3 className="text-xl lg:text-2xl">Teknik Informatika</h3>
          <p className="text-lg lg:text-xl">...</p>
          <Link
            className="mt-2 flex w-fit items-center gap-1 break-all rounded-full border bg-white px-3 py-1 text-black outline-none ring-0 lg:px-6"
            to="/profil/informasi-jurusan"
          >
            Info Lanjut
            <FiArrowUpRight className="size-5" />
          </Link>
        </div>
        <div className="relative flex min-h-[20rem] flex-col justify-center gap-4 overflow-hidden rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 lg:rounded-xl">
          <div className="absolute h-full w-full bg-gradient-to-br from-primary/70 to-secondary/70 opacity-60" />
          <img
            src="../../../../public/images/fasilkom.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <article className="flex"></article>
    </section>
  );
}
