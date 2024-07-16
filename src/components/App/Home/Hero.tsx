import HeroCarousel from "./HeroCarousel";
import alumniText from "@/../public/images/alumni-statistik-text.svg";
import pengajarText from "@/../public/images/pengajar-statistik-text.svg";
import mahasiswaText from "@/../public/images/mahasiswa-statistik-text.svg";

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
      <div className="absolute -bottom-20 flex w-screen justify-center">
        <div className="mx-auto flex w-5/12 justify-between rounded-xl border-4 border-white bg-gradient-to-r from-primary/70 to-secondary/70 px-8 py-10 backdrop-blur-xl">
          {data.map((e, index) => (
            <div
              key={index}
              className="w-full border-r-4 px-2 text-center last:border-0"
            >
              <h1 className="mb-2 text-4xl font-bold text-white">
                {e.content}
              </h1>
              {/* <p className="text font-outline-2 text-3xl font-bold text-transparent">
                {e.type}
              </p> */}
              {e.type === "Alumni" && (
                <img src={alumniText} alt="" className="mx-auto" />
              )}
              {e.type === "Mahasiswa" && (
                <img src={mahasiswaText} alt="" className="mx-auto" />
              )}
              {e.type === "Pengajar" && (
                <img src={pengajarText} alt="" className="mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
