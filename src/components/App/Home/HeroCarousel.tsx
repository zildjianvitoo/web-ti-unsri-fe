import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import carouselimgdummy1 from "@/../public/images/image-dummy1.png";
import carouselimgdummy2 from "@/../public/images/image-dummy2.png";
import carouselimgdummy3 from "@/../public/images/image-dummy3.png";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

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
    });
  }, [api]);

  return (
    <div className="mx-auto mt-8 flex w-[150vw] items-center justify-center max-sm:max-h-[20rem] lg:h-[33rem]">
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
        <CarouselContent className="flex items-center gap-3 pl-3">
          {data.map((e, index) => (
            <CarouselItem
              key={index}
              className={`basis-1/3 overflow-hidden rounded-xl p-0`}
            >
              <img
                src={e.img}
                alt={e.img}
                className={cn(
                  "h-[20rem] w-full object-cover duration-100 ease-in-out md:h-[25rem] lg:h-[30rem] lg:transition-all lg:duration-500",
                  {
                    "h-[23rem] md:h-[27rem] lg:h-[34rem]":
                      index === indexOnCenter,
                  },
                )}
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
