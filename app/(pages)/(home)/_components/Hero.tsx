"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "586px",
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1
              className="
      text-[55px] 
      md:text-[55px] lg:text-[55px] 
      font-[AvantGarde] font-bold
      leading-[64px] 
      tracking-[0%] 
      text-gray-900
    "
            >
              İxtisaslaşmış Tibbi
              <br />
              Xidmətin Tək Ünvanı!
            </h1>

            <p
              className="
      text-lg 
      font-[AvantGarde] font-bold
      leading-[28px]
      text-gray-600
    "
            >
              Peşəkar həkimlərimiz və müasir avadanlıqlarımızla sizə ən yaxşı
              tibbi xidməti təqdim edirik.
            </p>

            <Button
              size="lg"
              className="
    w-[219px]
    h-[50px]
    rounded-full
    text-white
    font-[AvantGarde] font-bold
    text-lg
    flex items-center justify-between
    px-4
    overflow-hidden
    relative
    bg-[linear-gradient(93.08deg,#14B0F9_1.53%,#0197DC_98.47%)]
  "
            >
              <span className="ml-2">Bütün xidmətlər</span>

              <span
                className="
      w-[41px] h-[41px]
      bg-[rgba(15,179,255,0.55)]
      rounded-full 
      flex items-center justify-center
      absolute right-0 top-1/2 -translate-y-1/2 mr-[7px]
    "
              >
                <Image src='./images/arrow.svg' width={12}  height={12} alt="arrow"/>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
