import SectionTitle from "@/components/SectionTitle";

export default function Kurikulum() {
  return (
    <>
      <section id="informasi-jurusan">
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionTitle title="Kurikulum" />
        </div>
        <div className="mt-10 flex h-full w-full flex-col gap-10 px-4 md:gap-14 lg:px-12 xl:px-20">
          {Array.from({ length: 2 }).map((item, index) => (
            <div className="flex flex-col gap-2" key={index + "kurikulum"}>
              <h1 className="w-fit bg-gradient-to-r from-secondary-100 to-primary-100 bg-clip-text text-2xl font-bold text-transparent lg:text-5xl">
                Kurikulum 2019
              </h1>
              <p className="text-sm lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <div className="flex flex-row gap-2">
                <button className="rounded-full bg-green-500 px-5 py-1 font-medium text-white max-md:text-sm">
                  Tinjau
                </button>
                <button className="rounded-full bg-red-500 px-5 py-1 font-medium text-white max-md:text-sm">
                  Unduh
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
