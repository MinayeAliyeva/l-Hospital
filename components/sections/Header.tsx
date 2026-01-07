"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Search } from "lucide-react";
import MiniLanguageSelect from "./MiniLanguageSelect";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const menuItems = [
  { label: "Haqqımızda", href: "/doctors" },
  { label: "Xidmətlər", href: "/services" },
  { label: "Referans Eşitmə", href: "/referance" },
  { label: "Xəbərlər", href: "/news" },
  { label: "Əlaqə", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[rgba(250,250,250,1)] h-12.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-[14px]">
            <div className="flex items-center gap-4 text-[rgba(138,138,138,1)]">
              <a href="#" className="hover:text-cyan-500 transition-colors">
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  height={7}
                  width={7}
                />
              </a>
              <a href="#" className="hover:text-cyan-500 transition-colors">
                <Image
                  src="/images/instagram.svg"
                  alt="facebook"
                  height={14}
                  width={14}
                />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {" "}
                <Image
                  src="./images/person.svg"
                  alt="person"
                  height={15}
                  width={15}
                />
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-[14px] text-[rgba(138,138,138,1)] hover:text-cyan-500"
                >
                  Daxil olun
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="./images/lang.svg"
                  alt="lang"
                  height={15}
                  width={15}
                />
                <MiniLanguageSelect />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
             <Link href="/">
                <Image
                src="/images/logo.svg"
                alt="logo"
                width={177}
                height={65}
              />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    ${item.href === pathname ? "text-cyan-600" : "text-[rgba(138,138,138,1)] hover:text-cyan-600"}
                    transition-colors font-avant font-bold text-[20.77px] leading-none tracking-[-0.05em]
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <SearchInput />

              <div className="relative w-34.75 h-[45.99px]">
                <div className="absolute left-0.75 top-1/2 -translate-y-1/2 w-[39.86px] h-[39.86px] rounded-full flex items-center justify-center bg-[rgba(15,179,255,0.55)] z-10">
                  <Phone className="w-4 h-4 text-white" />
                </div>

                <Button className="w-full h-full pl-13 rounded-full bg-linear-to-r from-[rgba(0,149,218,1)] to-[rgba(25,182,255,1)] hover:from-[rgba(0,140,210,1)] hover:to-[rgba(20,170,245,1)]">
                  <span className="text-white text-[30px] leading-4.25">
                    0111
                  </span>
                </Button>
              </div>

            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menyu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-[rgba(138, 138, 138, 1)] transition-colors font-medium text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button className="bg-cyan-500 hover:bg-cyan-600 mt-4 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +3214 ()
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
