export default function ProfilJurusan() {
  return (
    <section
      className="mx-auto mt-10 px-4 lg:mt-16 lg:px-12 xl:px-20"
      id="profil-jurusan"
    >
      <div className="flex flex-col gap-7 lg:gap-10">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          Profil Jurusan
        </h1>
        <div className="mx-auto w-3/5">
          <div className="aspect-video">
            <iframe
              src="https://drive.google.com/file/d/1Fyr1gf4frpPBYFt1qa4q1LfGz5YPqtlY/preview"
              allow="autoplay"
              className="h-full w-full overflow-hidden rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
