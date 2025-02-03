import React from 'react';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from '@/components/ui/carousel';
import ArtistCard, { ArtistType } from './card';

function ArtistCarousel() {
    const data: ArtistType[] = [
      {
        name: "MICAH ANGELO",
        position: "Singer",
        image:
          "https://cdn.pixabay.com/photo/2022/06/08/15/20/artist-7250695_1280.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "MARIA TIFFANY",
        position: "Guirarist",
        image:
          "https://cdn.pixabay.com/photo/2014/02/21/23/28/concert-271723_960_720.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "BIG BEN",
        position: "Drummer",
        image:
          "https://cdn.pixabay.com/photo/2015/08/16/12/36/man-890877_1280.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "SASHA RAE",
        position: "Trumpeter",
        image:
          "https://cdn.pixabay.com/photo/2022/07/04/04/37/musician-7300353_1280.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "John Doe",
        position: "Singer",
        image: "https://picsum.photos/400/300",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "John Doe",
        position: "Guirarist",
        image: "https://picsum.photos/400/300",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "John Doe",
        position: "Trumpeter",
        image: "https://picsum.photos/400/300",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "John Doe",
        position: "Drummer",
        image: "https://picsum.photos/400/300",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ];
    return (
      <div className="h-full px-[130px] mt-10 flex flex-col relative items-center">
        <Carousel
          opts={{
            align: "center",
            slidesToScroll: 4,
            dragFree: true,
            watchDrag: true,
          }}
          className="flex flex-col"
        >
          <CarouselContent>
            {data.map((artist: ArtistType, index: number) => (
              <CarouselItem
                key={index}
                className="w-fullmd:basis-1/2 lg:basis-1/4"
              >
                <ArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-x-4 mt-5">
            <CarouselPrevious className=" bg-[#0F3809] static w-full md:w-[100px] h-2" />
            <CarouselNext className=" bg-[#0F3809] static w-full md:w-[100px] h-2" />
          </div>
        </Carousel>
      </div>
    );
}

export default ArtistCarousel
