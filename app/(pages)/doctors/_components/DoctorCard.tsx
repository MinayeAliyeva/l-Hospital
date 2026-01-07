"use client"
import { IDoctor } from "@/app/models";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";

interface DoctorCardProps {
  doctor: IDoctor;
  index: number;
}

export const DoctorCard: FC<DoctorCardProps> = ({ doctor, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const router = useRouter();
  const handleSearchDoctorDetail=(id: number)=>{
    router.push(`/doctor-detail?id=${id}`)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`overflow-hidden hover:shadow-2xl transition-all duration-700 group cursor-pointer w-full ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        maxWidth: '380.34px',
        borderRadius: '21.53px',
        backgroundColor: '#F9F9FA'
      }}
      onClick={() => handleSearchDoctorDetail(doctor.id)}
    >
      <div className="relative overflow-hidden w-full aspect-[380.34/365.09]">
        <Image
          src={doctor.image}
          alt={doctor.name}
          className="group-hover:scale-110 transition-transform duration-700 object-cover"
          loading="lazy"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="px-4 sm:px-5 md:px-6 pt-3 sm:pt-4 md:pt-5 pb-4 sm:pb-5 md:pb-6" style={{ backgroundColor: '#F9F9FA' }}>
        <h3 
          className="font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-cyan-500 transition-colors duration-300"
          style={{ 
            fontFamily: 'Avant Garde, Arial, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(20px, 5vw, 29.21px)',
            lineHeight: '1.3',
            letterSpacing: '-0.05em'
          }}
        >
          {doctor.name}
        </h3>
        <p 
          className="text-gray-600"
          style={{ 
            fontFamily: 'Avant Garde, Arial, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(14px, 3.5vw, 17.94px)',
            lineHeight: '1.1',
            letterSpacing: '0'
          }}
        >
          {doctor.title}
        </p>
      </div>
    </div>
  );
}