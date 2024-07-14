export default function KompetensiUtama() {
  return (
    <section
      id="kompetensi-utama"
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
    >
      <div className="flex flex-col gap-8 md:flex-row lg:gap-6">
        <figure className="hidden flex-1 md:flex">
          <img
            src="/images/carousel-image.png"
            alt="Dummy Image"
            className="w-full rounded-l-2xl object-cover"
          />
        </figure>
        <div className="flex flex-1 flex-col">
          <h2 className="from-secondary-100 to-primary-100 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent max-lg:text-center sm:text-4xl md:text-5xl xl:text-6xl">
            Kompetensi Utama.
          </h2>
          <h4 className="mt-5 text-lg font-medium max-md:text-center lg:mt-7 lg:text-xl">
            Lulusan Program Studi Teknik Informatika pada Fakultas Ilmu Komputer
            Universitas Sriwijaya harus memiliki kompetensi, diantaranya:
          </h4>
          <div className="mt-5 flex flex-col gap-5">
            <div className="relative rounded-r-2xl bg-primary/90 lg:rounded-r-[20px]">
              <div className="absolute rounded-br-[10px] bg-background p-[2px] py-0 pr-2">
                <p className="from-secondary-100 to-primary-100 bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
                  1
                </p>
              </div>
              <p className="px-10 py-4 text-justify text-black lg:text-lg">
                Mempunyai tanggung jawab, berakhlak mulia dan berkepribadian
                yang luhur.
              </p>
            </div>
            <div className="relative rounded-r-2xl bg-secondary/90 lg:rounded-r-[20px]">
              <div className="absolute rounded-br-[10px] bg-background p-[2px] py-0 pr-2">
                <p className="from-secondary-100 to-primary-100 bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
                  2
                </p>
              </div>
              <p className="px-10 py-4 text-justify text-black lg:text-lg">
                Menguasai dasar-dasar keilmuan sistem komputer secara baik,
                serta berkemampuan dalam merumuskan masalah secara tepat
              </p>
            </div>
            <div className="relative rounded-r-2xl bg-primary/90 lg:rounded-r-[20px]">
              <div className="absolute rounded-br-[10px] bg-background p-[2px] py-0 pr-2">
                <p className="from-secondary-100 to-primary-100 bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
                  3
                </p>
              </div>
              <p className="px-10 py-4 text-justify text-black lg:text-lg">
                Menerapkan konsep ilmu Teknik Informatika dalam menjawab
                perkembangan ilmu pengetahuan dan teknologi.
              </p>
            </div>
            <div className="relative rounded-r-2xl bg-secondary/90 lg:rounded-r-[20px]">
              <div className="absolute rounded-br-[10px] bg-background p-[2px] py-0 pr-2">
                <p className="from-secondary-100 to-primary-100 bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent lg:text-3xl">
                  4
                </p>
              </div>
              <p className="px-10 py-4 text-justify text-black lg:text-lg">
                Membangun interaksi dengan masyarakat sesuai dengan profesi
                program studi sistem komputer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
