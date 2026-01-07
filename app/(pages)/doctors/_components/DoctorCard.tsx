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
      className={`overflow-hidden hover:shadow-2xl transition-all duration-700 group cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        width: '380.34px',
        height: '488.88px',
        borderRadius: '21.53px',
        backgroundColor: '#F9F9FA'
      }}
      onClick={() => handleSearchDoctorDetail(doctor.id)}
    >
      <div className="relative overflow-hidden" style={{ width: '380.34px', height: '365.09px' }}>
        <Image
          src={doctor.image}
          alt={doctor.name}
          className="group-hover:scale-110 transition-transform duration-700 object-cover"
          loading="lazy"
          fill
          sizes="380px"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="px-6 pt-5 pb-6" style={{ backgroundColor: '#F9F9FA' }}>
        <h3 
          className="font-bold text-gray-900 mb-2 group-hover:text-cyan-500 transition-colors duration-300"
          style={{ 
            fontFamily: 'Avant Garde, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '29.21px',
            lineHeight: '37.55px',
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
            fontSize: '17.94px',
            lineHeight: '19.73px',
            letterSpacing: '0'
          }}
        >
          {doctor.title}
        </p>
      </div>
    </div>
  );
}