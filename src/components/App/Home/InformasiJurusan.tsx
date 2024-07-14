import { FiArrowUpRight } from "react-icons/fi";

export default function InformasiJurusan() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="informasi-jurusan"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex min-h-[20rem] flex-col justify-center gap-4 rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 p-6 sm:p-10 md:p-12 lg:rounded-[20px] lg:p-[60px]">
          <h1 className="text-3xl font-bold lg:text-[40px]">
            Informasi Jurusan
          </h1>
          <h3 className="text-xl lg:text-2xl">Teknik Informatika</h3>
          <p className="text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus,{" "}
          </p>
          <button className="mt-2 flex w-fit items-center gap-1 break-all rounded-full border bg-white px-3 py-1 text-black outline-none ring-0 lg:px-6">
            Info Lanjut
            <FiArrowUpRight className="size-5" />
          </button>
        </div>
        <div className="flex min-h-[20rem] flex-col justify-center gap-4 rounded-md bg-gradient-to-br from-primary/70 to-secondary/70 p-6 sm:p-10 md:p-12 lg:rounded-[20px] lg:p-[60px]">
          <h1 className="text-3xl font-bold lg:text-[40px]">
            Informasi Jurusan
          </h1>
          <h3 className="text-xl lg:text-2xl">Teknik Informatika</h3>
          <p className="text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus,{" "}
          </p>
          <button className="mt-2 flex w-fit items-center gap-1 break-all rounded-full border bg-white px-3 py-1 text-black outline-none ring-0 lg:px-6">
            Info Lanjut
            <FiArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
