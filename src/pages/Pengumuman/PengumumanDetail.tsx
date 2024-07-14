import { FaCalendar } from "react-icons/fa";

export default function PengumumanDetail() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="pengumuman-detail"
    >
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Judul Pengumuman - Lorem Ipsum Dolor Sit Amet, Adispiscing Etiam Eu
            Turpis.
          </h1>
          <div className="mt-2 flex gap-2">
            <FaCalendar className="size-8 text-[#898989] dark:text-white" />
            <p className="mt-[2px] text-xl font-medium md:text-2xl">
              29 Jan 2024
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
          <figure className="w-full">
            <img
              src="/images/carousel-image.png"
              alt="Dummy"
              className="w-full object-contain"
            />
          </figure>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </div>
    </section>
  );
}
