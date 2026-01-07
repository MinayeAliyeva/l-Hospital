"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "@/db/doctors";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      doctor.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  return (
    <main className="flex-1">
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder="Həkimin Adı, Soyadı"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3.5 rounded-lg border border-gray-200 focus:bg-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none transition-all text-base text-gray-700 placeholder:text-gray-400"
            style={{ backgroundColor: "#F7FAFF" }}
          />
          <Search
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>
      </div>

      {/* Doctors */}
      <div className="grid grid-cols-2 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={doctor.id} doctor={doctor} index={index} />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-lg">
          Axtarışınıza uyğun həkim tapılmadı
        </div>
      )}
    </main>
  );
};

export default Doctors;
