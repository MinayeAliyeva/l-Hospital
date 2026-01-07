"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[rgba(0,149,218,1)] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
     
          <>
            <Link href="/">
              <Image
                src="/images/footer-logo.svg"
                alt="Lor Hospital"
                width={180}
                height={70}
                className="mb-6"
              />
            </Link>

            <p
              className="
                font-[AvantGarde]
                font-normal
                text-[22.46px]
                leading-[34.13px]
                opacity-90
              "
            >
              Qafqazın ilk və yeganə
            </p>

            <p
              className="
                font-[AvantGarde]
                font-bold
                text-[22.46px]
                leading-[34.13px]
              "
            >
              QULAQ BURUN BOĞAZ VƏ <br />
              BAŞ-BOYUN MƏRKƏZİ!
            </p>
          </>

     
          <div className="mt-21.5">
            <h4
              className="
                font-[AvantGarde]
                font-bold
                text-[22.46px]
                leading-[34.13px]
                mb-6
              "
            >
              ƏLAQƏ
            </h4>

            <ul
              className="
                space-y-4
                font-[AvantGarde]
                font-normal
                text-[22.46px]
                leading-[34.13px]
                opacity-90
              "
            >
              <li className="flex items-center gap-3">
                <Phone size={20} /> *0111
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} /> info@lorhospital.az
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075
              </li>
            </ul>
          </div>

          {/* ABUNƏ OLUN */}
          <div className="mt-21.5">
            <h4
              className="
                font-[AvantGarde]
                font-bold
                text-[22.46px]
                leading-[34.13px]
                mb-6
              "
            >
              ABUNƏ OLUN
            </h4>

            <ul
              className="
                space-y-4
                font-[AvantGarde]
                font-normal
                text-[22.46px]
                leading-[34.13px]
                opacity-90
              "
            >
              <li className="flex items-center gap-3">
                <FaFacebookF size={20} /> Lor Hospital
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram size={20} /> Lor Hospital
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + INPUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">
          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map(
              (Icon, i) => (
                <Button
                  key={i}
                  size="icon"
                  className="
                    w-[59px]
                    h-[59px]
                    rounded-full
                    bg-white
                    hover:bg-white
                    hover:scale-105
                    transition-transform
                  "
                >
                  <Icon className="text-[rgba(67,149,205,1)] text-[24px]" />
                </Button>
              )
            )}
          </div>

          {/* INPUT */}
          <div className="relative w-full max-w-[420px]">
            <input
              placeholder="Sualınız var?"
              className="
                w-full h-[56px]
                rounded-full
                bg-transparent
                border border-white
                pl-6 pr-16
                placeholder:text-white
                font-[AvantGarde]
                font-normal
                text-[22.46px]
                leading-[34.13px]
                outline-none
              "
            />
            <Button
              size="icon"
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                w-10 h-10
                rounded-full
              bg-[rgba(25,182,255,1)]
                hover:bg-white
              "
            >
              <ArrowRight className="text-white" />
            </Button>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/30 my-12" />

        {/* SCROLL TO TOP */}
        <div className="flex justify-end">
          <Button
            size="icon"
            variant="outline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              w-14 h-14
              rounded-full
              border-white
              text-white
              hover:bg-white/10
            "
          >
            <ChevronUp />
          </Button>
        </div>
      </div>
    </footer>
  );
}
