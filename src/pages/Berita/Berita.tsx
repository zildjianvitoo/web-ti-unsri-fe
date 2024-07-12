import { FaCalendar } from "react-icons/fa";

export default function Berita() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="berita"
    >
      <div className="flex flex-col gap-5 md:flex-row md:gap-7">
        <figure className="relative flex max-md:flex-col lg:basis-3/5">
          <img
            src="/images/carousel-image.png"
            alt="Dummy Image"
            className="rounded-md object-cover"
          />
          <figcaption className="glassmorphism absolute bottom-0 left-0 hidden w-full flex-col gap-2 rounded-none p-4 md:flex md:h-1/2 lg:h-[40%] lg:p-8 xl:h-[35%]">
            <h3 className="text-xl font-semibold md:text-2xl">
              Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim.
            </p>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-7 max-md:hidden lg:basis-2/5">
          <div className="flex flex-col gap-3 md:flex-row lg:gap-4">
            <figure className="relative flex lg:max-w-[50%]">
              <img
                src="/images/carousel-image.png"
                alt="Dummy Image"
                className="rounded-md object-cover"
              />
            </figure>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold md:text-xl">
                Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
              </h4>
              <p className="font-medium">07 Jan 2024</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row lg:gap-4">
            <figure className="relative flex lg:max-w-[50%]">
              <img
                src="/images/carousel-image.png"
                alt="Dummy Image"
                className="rounded-md object-cover"
              />
            </figure>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold md:text-xl">
                Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
              </h4>
              <p className="font-medium">07 Jan 2024</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row lg:gap-4">
            <figure className="relative flex lg:max-w-[50%]">
              <img
                src="/images/carousel-image.png"
                alt="Dummy Image"
                className="rounded-md object-cover"
              />
            </figure>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold md:text-xl">
                Lorem ipsum dolor sit amet, adipiscing Etiam eu turpis.
              </h4>
              <p className="font-medium">07 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
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
            <div className="flex gap-2">
              <FaCalendar className="size-4 text-[#5c5839]" />
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
    </section>
  );
}
