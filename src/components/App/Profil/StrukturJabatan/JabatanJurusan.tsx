import { Pimpinan } from "@/types/strukturJabatan";

export default function JabatanJurusan({ data }: { data: Pimpinan[] }) {
  return (
    <section
      id="jabatan-jurusan"
      className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:px-12 xl:px-20"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center gap-2 text-center md:flex-row md:justify-normal md:gap-5 md:text-start even:md:flex-row-reverse even:md:text-end lg:gap-10"
        >
          <div className="w-4/6 overflow-hidden rounded-md bg-gradient-to-br from-primary from-[23%] to-secondary md:w-2/6 md:self-stretch">
            <img
              src={item.foto}
              alt={"gambar" + item.nama}
              className="mx-auto object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col md:w-4/6 md:gap-2">
            <h1 className="text-2xl font-bold lg:text-3xl">{item.nama}</h1>
            <h3 className="font-medium md:text-xl lg:text-2xl">
              {item.jabatan}
            </h3>
            <p className="lg:text-lg">{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
