import img from "@/../public/images/image-dummy1.png";

export default function TentangJurusan() {
  return (
    <section
      id="tentang-jurusan"
      className="mt-20 flex w-full flex-col gap-4 px-4 md:gap-8 lg:flex-row lg:px-12 xl:px-20"
    >
      <div className="overflow-hidden rounded-2xl lg:w-3/6 xl:w-2/6">
        <img
          src={img}
          alt="img-informasijurusan"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col text-justify text-base leading-5 md:text-lg md:leading-6 lg:w-3/6 lg:gap-2 xl:w-4/6">
        <h1 className="text-center text-2xl font-bold md:text-start md:text-4xl">
          Teknik Informatika
        </h1>
        <h3 className="mb-2 text-center text-lg font-semibold md:text-start md:text-xl lg:mb-0">
          Universitas Sriwijaya
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
    </section>
  );
}
