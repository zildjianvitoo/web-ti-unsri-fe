const dummyData = [
  {
    image: "/images/tenaga-pendidik-dummy.png",
    name: "Nama Dosen. S.Kom",
    role: "Pengajar",
    field: "Pemrorsesan bahasa alami",
  },
  {
    image: "/images/tenaga-pendidik-dummy.png",
    name: "Nama Dosen. S.Kom",
    role: "Pengajar",
    field: "Pemrorsesan bahasa alami",
  },
  {
    image: "/images/tenaga-pendidik-dummy.png",
    name: "Nama Dosen. S.Kom",
    role: "Pengajar",
    field: "Pemrorsesan bahasa alami",
  },
  {
    image: "/images/tenaga-pendidik-dummy.png",
    name: "Nama Dosen. S.Kom",
    role: "Pengajar",
    field: "Pemrorsesan bahasa alami",
  },
];

export default function TenagaPendidik() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 xl:px-20"
      id="tenaga-pendidik"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-3xl font-bold md:text-4xl">Tenaga Pendidik</h1>

        <div className="relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {dummyData.map((item, index) => (
            <div
              key={index}
              className="relative flex min-h-96 flex-col justify-end rounded-lg bg-gradient-to-br from-primary/70 from-[23%] to-secondary/70 p-5 lg:rounded-2xl"
            >
              <figure className="absolute bottom-4 z-0 mt-auto scale-110">
                <img src={item.image} alt="tenaga-pendidik" />
              </figure>
              <div className="relative z-10 text-white">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-lg">{item.role}</p>
                <div className="mt-2 w-fit rounded-full border border-white px-3">
                  {item.field}
                </div>
              </div>
              <div className="absolute inset-0 z-[8] h-full rounded-b-2xl bg-gradient-to-t from-[#222222]/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
