import HeroCarousel from "./HeroCarousel";

const data = [
  {
    type: "Mahasiswa",
    content: "666+",
  },
  {
    type: "Pengajar",
    content: "67+",
  },
  {
    type: "Alumni",
    content: "1826+",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative mb-36">
      <HeroCarousel />
      <div className="absolute -bottom-20 flex w-screen justify-center px-12 md:px-8">
        <div className="mx-auto flex justify-between rounded-xl border-4 border-white bg-gradient-to-r from-primary/70 to-secondary/70 px-4 py-10 backdrop-blur-xl lg:w-5/12 lg:px-8">
          {data.slice(0, 6).map((e, index) => (
            <div
              key={index}
              className="w-full border-r-4 border-white px-2 text-center last:border-0"
            >
              <h1 className="mb-2 text-2xl font-semibold text-white md:text-3xl lg:text-4xl lg:font-bold">
                {e.content}
              </h1>
              {/* <p className="text font-outline-2 text-3xl font-bold text-transparent">
                {e.type}
              </p> */}
              {e.type === "Alumni" && (
                <img
                  src={"/images/alumni-statistik-text.svg"}
                  alt="Alumni"
                  className="mx-auto"
                />
              )}
              {e.type === "Mahasiswa" && (
                <img
                  src={"/images/mahasiswa-statistik-text.svg"}
                  alt="Mahasiswa"
                  className="mx-auto"
                />
              )}
              {e.type === "Pengajar" && (
                <img
                  src={"/images/pengajar-statistik-text.svg"}
                  alt="Pengajar"
                  className="mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
