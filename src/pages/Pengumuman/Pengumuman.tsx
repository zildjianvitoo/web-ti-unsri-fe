import { FaCalendar } from "react-icons/fa";

const dummyData = [
  {
    image: "/images/carousel-image.png",
    title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
    date: "29 Jan 2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
  },
  {
    image: "/images/carousel-image.png",
    title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
    date: "29 Jan 2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
  },
  {
    image: "/images/carousel-image.png",
    title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
    date: "29 Jan 2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
  },
  {
    image: "/images/carousel-image.png",
    title: "Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.",
    date: "29 Jan 2024",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim. Classaptent taciti sociosqu ad litora torquent per conubia nostra, per  inceptos himenaeos.",
  },
];

export default function Pengumuman() {
  return (
    <section id="pengumuman">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex items-center justify-between">
          <div className="w-full bg-gradient-to-r from-primary to-secondary px-14 py-6 md:px-24 md:py-10 lg:w-1/2 lg:rounded-r-full lg:px-32 lg:py-14">
            <h1 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl xl:text-6xl">
              Pengumuman
            </h1>
          </div>
          <div className="hidden md:gap-4 lg:flex lg:gap-6">
            <div className="size-12 rounded-full bg-[#71EDAA]" />
            <div className="size-12 rounded-full bg-[#E3A5A5]" />
            <div className="size-12 rounded-full bg-[#FACB94]" />
            <div className="size-12 rounded-l-full bg-secondary" />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-x-10 gap-y-8 px-4 md:grid-cols-2 md:gap-y-12 lg:mt-10 lg:grid-cols-3 xl:px-20">
          {dummyData.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <figure>
                <img src={item.image} alt="Dummy" className="rounded-xl" />
              </figure>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <FaCalendar className="size-4 text-[#5c5839]" />
                  <p className="mt-[2px] text-sm font-medium text-[#696969]">
                    {item.date}
                  </p>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
