import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carouselimgdummy1 from "@/../public/images/image-carousel-dummy1.png";
import carouselimgdummy2 from "@/../public/images/image-carousel-dummy2.png";
import carouselimgdummy3 from "@/../public/images/image-carousel-dummy3.png";

import React, { useState } from "react";

const data = [
  {
    img: carouselimgdummy1,
  },
  {
    img: carouselimgdummy2,
  },
  {
    img: carouselimgdummy3,
  },
  {
    img: carouselimgdummy1,
  },
  {
    img: carouselimgdummy2,
  },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [indexOnCenter, setIndexOnCenter] = useState<number | undefined>(1);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      if (selectedIndex === 4) setIndexOnCenter(0);
      if (selectedIndex !== 4) setIndexOnCenter(selectedIndex + 1);

      console.log(selectedIndex);
    });
  }, [api]);

  return (
    <div className="mx-auto flex h-[33rem] w-[150vw] items-center justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="-ml-[50vw] overflow-hidden"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="items-center gap-3 pl-3">
          {data.map((e, index) => (
            <CarouselItem
              key={index}
              className={`basis-1/3 overflow-hidden rounded-xl p-0`}
            >
              <img
                src={e.img}
                alt={e.img}
                className={`w-full object-cover transition-all duration-500 ease-in-out ${index === indexOnCenter ? "h-[34rem]" : "h-[30rem]"}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
