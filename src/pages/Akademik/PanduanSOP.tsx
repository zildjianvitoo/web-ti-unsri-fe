import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import { CgArrowTopRight } from "react-icons/cg";

const data = [
  {
    title: "Panduan",
    konten: "Lorem",
    data: [
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "SOP",
    konten: "Lorem",
    data: [
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
      {
        nama: "Panduan Kerja Praktik",
        link: "https://www.google.com",
      },
    ],
  },
];

export default function PanduanSOP() {
  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Panduan & SOP" />
        </div>
        <div className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:px-12 xl:px-20">
          {data?.map((item, index) => (
            <div className="flex flex-col gap-2" key={index + "data"}>
              <h1 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-2xl font-bold text-transparent lg:text-5xl">
                {item.title}
              </h1>
              <p className="text-sm lg:text-lg">{item.konten}</p>
              <div className="lg:gap- grid grid-flow-row grid-cols-1 gap-2 lg:grid-cols-2">
                {item.data.map((item, index) => (
                  <a
                    className={cn(
                      `flex items-center justify-between rounded-md border-2 border-primary px-2 py-2 font-semibold transition-all duration-300 ease-in-out hover:bg-primary max-md:text-sm`,
                      {
                        "even:border-secondary hover:bg-secondary md:border-secondary":
                          index % 4 < 2,
                      },
                    )}
                    href={item.link}
                    key={index + "button"}
                  >
                    {item.nama}
                    <CgArrowTopRight className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
