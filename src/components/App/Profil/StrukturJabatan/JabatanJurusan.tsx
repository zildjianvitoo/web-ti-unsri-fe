import img from "@/../public/images/tenaga-pendidik-dummy.png";

const data = [
  {
    img: img,
    nama: "M. Fachrurrozi, S.Si",
    jabatan: "Ketua Jurusan",
    konten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    img: img,
    nama: "Osvari Arsalan, S.Kom., M.T.",
    jabatan: "Sekretaris Jurusan",
    konten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
];

export default function JabatanJurusan() {
  return (
    <section
      id="jabatan-jurusan"
      className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:px-12 xl:px-20"
    >
      {data.map((data, index) => (
        <div
          key={index}
          className="flex w-full flex-col items-center gap-2 text-center md:flex-row md:justify-normal md:gap-5 md:text-start even:md:flex-row-reverse even:md:text-end lg:gap-10"
        >
          <div className="w-4/6 overflow-hidden rounded-md bg-gradient-to-br from-primary from-[23%] to-secondary md:w-2/6 md:self-stretch">
            <img
              src={data.img}
              alt={"gambar" + data.nama}
              className="mx-auto object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col md:w-4/6 md:gap-2">
            <h1 className="text-2xl font-bold lg:text-3xl">{data.nama}</h1>
            <h3 className="font-medium md:text-xl lg:text-2xl">
              {data.jabatan}
            </h3>
            <p className="lg:text-lg">{data.konten}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
