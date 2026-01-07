"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

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
    specialty: "Qulaq Burun Boğaz və Baş-Boyun ",
    department: "Cərrahiyyəsi uzmanl",
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 412 + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-linear-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Həkimlər
          </h2>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-transparent border border-white-1"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4 text-gray-900" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="shrink-0 w-100 h-[529.647px] rounded-[23.32px] overflow-hidden snap-start flex flex-col"
            >
              <div className="w-full h-[412.055px] relative">
                <Image
                  src={doctor.img}
                  alt={doctor.name}
                  width={412}
                  height={412}
                  className="object-cover w-full h-full"
                />
              </div>

              <CardContent className="p-6 flex flex-col justify-start bg-white flex-1">
                <h3
                  className="
                    font-[AvantGarde] 
                    font-bold 
                    text-[31.64px] 
                    leading-[40.68px] 
                    tracking-[-0.05em] 
                    text-gray-900 
                    mb-1 
                    align-bottom
                  "
                >
                  {doctor.name}
                </h3>

                <p
                  className="
                      font-[AvantGarde] 
                      font-normal 
                      text-[19.44px] 
                      leading-[21.38px] 
                      tracking-[0%] 
                      text-[rgba(63,63,63,1)] 
                      mb-1 
                      align-bottom
                    "
                >
                  {doctor.specialty}
                </p>

                <p
                  className="
                    font-[AvantGarde] 
                    font-normal 
                    text-[19.44px] 
                    leading-[21.38px] 
                    tracking-[0%] 
                    text-[rgba(63,63,63,1)] 
                    align-bottom
                  "
                >
                  {doctor.department}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
