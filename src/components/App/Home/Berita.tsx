import { FaCalendar } from "react-icons/fa";

export default function Berita() {
  return (
    <section className="mx-auto mt-10 px-4 lg:mt-16 xl:px-20" id="berita">
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-center text-3xl font-bold md:text-4xl">Berita</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col gap-4">
            <img
              src="/images/carousel-image.png"
              alt="Berita"
              className="rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
              </h3>
              <div className="flex gap-1">
                <FaCalendar className="size-5" />
                <p className="text-sm">29 Jan 2024</p>
              </div>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos hienaeos...
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="/images/carousel-image.png"
              alt="Berita"
              className="rounded-md"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
              </h3>
              <div className="flex gap-1">
                <FaCalendar className="size-5" />
                <p className="text-sm">29 Jan 2024</p>
              </div>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos hienaeos...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
