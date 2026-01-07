'use client';


'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi, // Əlavə et!
} from '@/components/ui/carousel';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Qulaq xəstəlikləri',
    date: '28 mart 2025',
    category: 'Qulaq Müayinəsi',
    color: 'from-pink-400 to-pink-200',
    img:'/images/timp.svg'
  },
  {
    id: 2,
    title: 'Burun xəstəlikləri',
    date: '24 iyun 2025',
    category: 'Burun Xəstəlikləri',
    color: 'from-cyan-400 to-blue-300',
    img:'/images/skring.svg'
  },
  {
    id: 3,
    title: 'Baş-Boyun cərrahiyyəsi',
    date: '1 avqust 2025',
    category: 'Sağlamlıq',
    color: 'from-amber-300 to-orange-200',
    img:'/images/throat.svg'
  },
  {
    id: 4,
    title: 'Lor əməliyyatı zamanı anesteziya',
    date: '28 mart 2025',
    category: 'Cərrahiyyə',
    color: 'from-emerald-400 to-teal-300',
    img:'/images/sorgery.svg'
  },
  {
    id: 5,
    title: 'Qulaq üçün profilaktika',
    date: '12 aprel 2025',
    category: 'Qulaq Müayinəsi',
    color: 'from-purple-400 to-pink-300',
    img:'/images/timp.svg'
  },
  {
    id: 6,
    title: 'Burun əməliyyatları',
    date: '18 may 2025',
    category: 'Burun Xəstəlikləri',
    color: 'from-blue-400 to-cyan-300',
    img:'/images/skring.svg'
  },
  {
    id: 7,
    title: 'Baş ağrıları və müalicəsi',
    date: '3 iyul 2025',
    category: 'Sağlamlıq',
    color: 'from-amber-200 to-orange-300',
    img:'/images/throat.svg'
  },
  {
    id: 8,
    title: 'Anesteziya və təhlükəsizlik',
    date: '5 avqust 2025',
    category: 'Cərrahiyyə',
    color: 'from-teal-400 to-emerald-300',
    img:'/images/sorgery.svg'
  },
];

export default function UsefulInfo() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10 lg:px-36">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Faydalı Məlumatlar
          </h2>

          {/* Əl ilə idarə olunan düymələr */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-[rgba(0,149,218,1)] hover:bg-blue-600"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}  // <-- Bu vacibdir!
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {articles.map((article) => (
              <CarouselItem
                key={article.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[298px]"
              >
                <Card className="h-[370px] rounded-[8.58px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0 flex flex-col">
                  <div className="relative w-full h-[307px]">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-[8.58px]"
                    />
                  </div>

                  <CardContent className="p-4 flex flex-col justify-between flex-1">
                    <p className="font-[AvantGarde] font-normal text-[18.64px] leading-[22.78px] text-gray-600 mb-1">
                      {article.date}
                    </p>
                    <h3 className="font-[AvantGarde] font-bold text-[22.31px] leading-[22.78px] text-gray-900 mb-2">
                      {article.title}
                    </h3>

                    <Button
                      variant="ghost"
                      className="text-[14.31px] font-[AvantGarde] font-bold leading-[19.08px] text-[#00AEEF] p-0 h-auto mt-4 self-start"
                    >
                      Ətraflı
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
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
