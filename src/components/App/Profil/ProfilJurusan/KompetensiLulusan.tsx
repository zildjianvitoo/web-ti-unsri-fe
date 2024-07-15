import { cn } from "@/lib/utils";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { AiFillCode } from "react-icons/ai";
import { FaMagnifyingGlass, FaNetworkWired } from "react-icons/fa6";
import { MdEngineering, MdOutlineWifiPassword } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { ImMobile } from "react-icons/im";

const kompetensLulusanItems = [
  {
    title: "Tenaga Pendidik",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <PiChalkboardTeacherFill className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "Ahli Program",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: <AiFillCode className="size-10 text-black md:size-12 lg:size-14" />,
  },
  {
    title: "Peneliti",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <FaMagnifyingGlass className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "Network Engineer",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <FaNetworkWired className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "IT Support",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <MdEngineering className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "Data Analyst",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <BsDatabaseFillGear className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "Cyber Security",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: (
      <MdOutlineWifiPassword className="size-10 text-black md:size-12 lg:size-14" />
    ),
  },
  {
    title: "Mobile Developer",
    description:
      "Lorem ipsum dolor sit amet, ain consectetur adipiscing elit. Mo Etiam eu turpis molestie, dune dictum est a.",
    icon: <ImMobile className="size-10 text-black md:size-12 lg:size-14" />,
  },
];

const indexPrimary = [1, 3, 4, 6];

export default function KompetensiLulusan() {
  return (
    <section
      id="kompetensi-utama"
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
    >
      <div className="flex flex-col gap-6 lg:gap-7">
        <h2 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-3xl font-bold text-transparent max-lg:text-center sm:text-4xl md:text-5xl xl:text-6xl">
          Kompetensi Lulusan.
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7">
          {kompetensLulusanItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-4 rounded-2xl border-[5px] border-primary p-3 pb-5 lg:gap-5 lg:rounded-[20px] lg:p-4 lg:pb-6",
                {
                  "border-secondary": indexPrimary.includes(index),
                },
              )}
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <div
                  className={cn(
                    "grid place-items-center rounded-xl bg-primary p-2 lg:rounded-2xl",
                    {
                      "bg-secondary": indexPrimary.includes(index),
                    },
                  )}
                >
                  {item.icon}
                </div>
                <h3
                  className={cn("text-xl font-bold text-primary lg:text-2xl", {
                    "text-secondary": indexPrimary.includes(index),
                  })}
                >
                  {item.title}
                </h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
