import carouselimgdummy1 from "@/../public/images/image-dummy1.png";

export default function SaranaPrasarana() {
  return (
    <div className="mt-10 grid w-full grid-flow-row grid-cols-2 gap-3 gap-y-7 px-4 md:grid-cols-2 lg:mt-20 lg:px-12 xl:grid-cols-3 xl:px-20">
      {[...Array(10)].map((_, i) => (
        <figure key={i}>
          <div className="group overflow-hidden rounded-md lg:rounded-lg">
            <img
              src={carouselimgdummy1}
              alt=""
              className="transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2">
            <h6 className="text-xl font-bold lg:text-2xl">Judul Foto</h6>
            <p className="-mt-1 text-base lg:text-lg">Palembang</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
