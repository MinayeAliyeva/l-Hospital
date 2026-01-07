"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Aqil Ağayev",
    specialty: "Qulaq Burun Boğaz cərrahı",
    department: "Otonevroloq",
    img: "/images/img1.svg",
  },
  {
    id: 2,
    name: "Dr. Nigar Muradova",
    specialty: "Qulaq Burun Boğaz cərrahı",
    department: "Otonevroloq",
    img: "/images/img2.svg",
  },
  {
    id: 3,
    name: "Dr. Xeyyam Musayev",
    specialty: "Qulaq Burun Boğaz və Baş-Boyun",
    department: "Cərrahiyyəsi uzmanı",
    img: "/images/img3.svg",
  },
  {
    id: 4,
    name: "Dr. Leyla Əliyeva",
    specialty: "Pediatr",
    department: "Uşaq",
    img: "/images/img1.svg",
  },
  {
    id: 5,
    name: "Dr. Kamran Məmmədov",
    specialty: "Nevrolog",
    department: "Sinir",
    img: "/images/img2.svg",
  },
  {
    id: 6,
    name: "Dr. Aysel Hüseynova",
    specialty: "Dermatoloq",
    department: "Dəri",
    img: "/images/img3.svg",
  },
];

export default function Doctors() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Həkimlər
          </h2>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-transparent border border-white hover:bg-white/20"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5 text-gray-900" />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {doctors.map((doctor) => (
              <CarouselItem
                key={doctor.id}
                className="pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-[412px]"
              >
                <Card className="shrink-0 w-full h-[530px] rounded-[23.32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-0 flex flex-col">
                  <div className="relative w-full h-[412px]">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <CardContent className="p-6 bg-white flex-1 flex flex-col justify-start">
                    <h3 className="font-[AvantGarde] font-bold text-[31.64px] leading-[40.68px] tracking-[-0.05em] text-gray-900 mb-2">
                      {doctor.name}
                    </h3>

                    <p className="font-[AvantGarde] font-normal text-[19.44px] leading-[21.38px] text-[rgba(63,63,63,1)] mb-1">
                      {doctor.specialty}
                    </p>

                    <p className="font-[AvantGarde] font-normal text-[19.44px] leading-[21.38px] text-[rgba(63,63,63,1)]">
                      {doctor.department}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}