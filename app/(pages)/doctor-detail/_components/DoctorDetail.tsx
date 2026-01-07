"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { doctors } from "@/db/doctors";
import { IDoctor } from "@/app/models";

export const DoctorDetail = () => {
  const [activeTab, setActiveTab] = useState("melumat");
  const [doctorData, setDoctorData] = useState<IDoctor | undefined>();
  const searchParams = useSearchParams();
 
  const findedDoctorId = searchParams.get('id')
  useEffect(() => {
    if (findedDoctorId) {
      const doctor = doctors.find(doc => doc.id === parseInt(findedDoctorId));
      setDoctorData(doctor);
    }
  }, [findedDoctorId]);

  if (!doctorData) return <div className="text-center">Doctor not found</div>;
 

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden bg-linear-to-b from-blue-50 to-white">
              <Image
                src={doctorData?.image || "/images/doctor-placeholder.png"}
                alt={doctorData?.name || "Doctor Image"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-9">
            <h1 className="text-[#0095DA] text-3xl lg:text-4xl font-bold mb-2">
              {doctorData?.name}
            </h1>
            <p className="text-gray-500 text-base lg:text-lg mb-8">
              {doctorData?.title}
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center">
              {/* Təcrübə */}
              <div className="flex items-center gap-3 flex-1 justify-center">
                <Image
                  src="/images/year.svg"
                  alt="year"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                <div className="text-left">
                  <div className="text-lg lg:text-xl font-bold text-gray-800">
                    {doctorData?.experience} il
                  </div>
                  <div className="text-gray-500 text-sm lg:text-base">
                    Təcrübə
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="w-px bg-gray-200 h-12 mx-4" />

              {/* Pasiyent sayı */}
              <div className="flex items-center gap-3 flex-1 justify-center">
                <Image
                  src="/images/count.svg"
                  alt="count"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                <div className="text-left">
                  <div className="text-lg lg:text-xl font-bold text-gray-800">
                    {doctorData?.patientCount}
                  </div>
                  <div className="text-gray-500 text-sm lg:text-base">
                    Pasiyent sayı
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="w-px bg-gray-200 h-12 mx-4" />

              {/* Reylər */}
              <div className="flex items-center gap-3 flex-1 justify-center">
                <Image
                  src="/images/star.svg"
                  alt="star"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                <div className="text-left">
                  <div className="text-lg lg:text-xl font-bold text-gray-800">
                    {doctorData?.reviewCount}
                  </div>
                  <div className="text-gray-500 text-sm lg:text-base">
                    Reylər
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-200 mb-8">
          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab("melumat")}
              className={`px-6 py-4 text-base lg:text-lg font-semibold transition-colors relative ${
                activeTab === "melumat" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Məlumat
              {activeTab === "melumat" && (
                <div className="absolute bottom-0 -left-3 -right-3 h-1 bg-[#0095DA]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("meqaleler")}
              className={`px-6 py-4 text-base lg:text-lg font-semibold transition-colors relative ${
                activeTab === "meqaleler" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Həkimin məqalələri
              {activeTab === "meqaleler" && (
                <div className="absolute bottom-0 -left-3 -right-3 h-1 bg-[#0095DA]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("reyler")}
              className={`px-6 py-4 text-base lg:text-lg font-semibold transition-colors relative ${
                activeTab === "reyler" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Reylər
              {activeTab === "reyler" && (
                <div className="absolute bottom-0 -left-3 -right-3 h-1 bg-[#0095DA]" />
              )}
            </button>
          </div>
        </div>

        <div className="pb-32 lg:pb-12">
          {activeTab === "melumat" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 bg-[rgba(107,181,43,0.06)] rounded-xl p-4 lg:p-6">
                <div className="text-gray-800 font-semibold text-base">
                  Vəzifə
                </div>
                <div className="lg:col-span-4 text-gray-600 text-base">
                  {doctorData?.position}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="text-gray-800 font-semibold text-base">
                  Mərkəz
                </div>
                <div className="lg:col-span-4 text-gray-600 text-base">
                  {doctorData?.center}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 bg-[rgba(107,181,43,0.06)] rounded-xl p-4 lg:p-6">
                <div className="text-gray-800 font-semibold text-base">
                  Təhsil
                </div>
                <div className="lg:col-span-4 space-y-3">
                  {doctorData?.education.map((edu, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0095DA] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-600 text-base">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                <div className="text-gray-800 font-semibold text-base">
                  Müayinə və müalicə istiqamətləri
                </div>
                <div className="lg:col-span-4 space-y-3">
                  {doctorData?.services.map((service, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0095DA] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-600 text-base">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "meqaleler" && (
            <div className="text-center py-16 text-gray-400">
              {doctorData?.articles.length === 0
                ? "Məqalə yoxdur"
                : doctorData?.articles.map((article, index) => (
                    <div key={index}>{article}</div>
                  ))}
            </div>
          )}

          {activeTab === "reyler" && (
            <div className="text-center py-16 text-gray-400">
              {doctorData?.reviews.length === 0
                ? "Hələ ki rey yoxdur"
                : doctorData?.reviews.map((review, index) => (
                    <div key={index}>{review}</div>
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
