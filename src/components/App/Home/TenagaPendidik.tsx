import TenagaPendidikCard from "@/components/TenagaPendidikCard";

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
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="tenaga-pendidik"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-3xl font-bold md:text-4xl">Tenaga Pendidik</h1>

        <div className="relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {dummyData.map((item, index) => (
            <TenagaPendidikCard key={index} teacher={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
