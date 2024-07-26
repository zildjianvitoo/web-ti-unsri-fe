import img from "@/../public/images/tenaga-pendidik-dummy.png";
import TenagaPendidikCard from "@/components/TenagaPendidikCard";

const data = [
  {
    name: "Pemrosesan Bahasa Alami",
    teachers: [
      {
        image: img,
        name: "Philifs Bryan",
        role: "Pengajar",
        field: "Pemrosesan Bahasa Alami",
      },
      {
        image: img,
        name: "Rudi Salim",
        role: "Pengajar",
        field: "Sistem Terdistribusi",
      },
      {
        image: img,
        name: "Rudi Salim",
        role: "Pengajar",
        field: "Sistem Terdistribusi",
      },
    ],
  },
  {
    name: "Sistem Terdistribusi",
    teachers: [
      {
        image: img,
        name: "Genjat Genjot",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
    ],
  },
  {
    name: "Sistem Terdistribusi",
    teachers: [
      {
        image: img,
        name: "Genjat Genjot",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
      {
        image: img,
        name: "Bintang Purnomo Skibidi",
        role: "Pengajar",
        field: "Data Science",
      },
    ],
  },
];

export default function DosenPengajar() {
  return (
    <section
      id="tentang-jurusan"
      className="mt-20 flex w-full flex-col gap-16 px-4 md:gap-8 lg:px-12 xl:px-20"
    >
      {data.map((data, index) => (
        <div key={index}>
          <h1 className="mb-3 text-xl font-bold lg:text-4xl">{data.name}</h1>
          <div className="grid w-full grid-cols-2 justify-start gap-5 md:grid-flow-row md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.teachers.map((data, index) => (
              <TenagaPendidikCard teacher={data} key={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
