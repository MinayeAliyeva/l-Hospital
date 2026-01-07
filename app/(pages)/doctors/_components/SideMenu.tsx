"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const menuItems = [
  { name: "Tariximiz", path: "#", id: "history" },
  { name: "Missiya və Məqsəd", path: "#", id: "mission" },
  { name: "Keyfiyyət siyasəti", path: "#", id: "quality" },
  { name: "Keyfiyyətə nəzarət", path: "#", id: "quality-control" },
  { name: "Sertifikatlar", path: "#", id: "certificates" },
  { name: "Beynəlxalq Əməkdaşlıq", path: "#", id: "international" },
  { name: "Mərkəzlərimiz", path: "#", id: "centers" },
  { name: "Həkimlərimiz", path: "#", id: "doctors" },
  { name: "Məmnunluq anketi", path: "#", id: "survey" },
];

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState("doctors");


  return (
    <aside className="w-96 shrink-0">
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            onClick={(e) => {
              e.preventDefault();
              setActiveMenu(item.id);
            }}
            className={`flex items-center justify-between px-8 py-5 rounded-xl transition-all group ${
              activeMenu === item.id
                ? "text-white shadow-lg"
                : "text-gray-700 hover:opacity-80"
            }`}
            style={
              activeMenu === item.id
                ? { backgroundColor: "#0095DA" }
                : { backgroundColor: "#F7FAFF" }
            }
          >
            <span
              className={`text-lg ${
                activeMenu === item.id ? "font-semibold" : "font-normal"
              }`}
            >
              {item.name}
            </span>
            {activeMenu === item.id ? (
              <div className="bg-white rounded-full p-2">
                <ChevronRight
                  size={20}
                  style={{ color: "#0095DA", transform: "rotate(90deg)" }}
                />
              </div>
            ) : (
              <ChevronRight size={20} className="text-cyan-500" />
            )}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SideMenu;
