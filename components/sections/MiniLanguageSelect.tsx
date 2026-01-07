"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";

const languages = [
  { value: "az", label: "AZ" },
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
];

export default function MiniLanguageSelect() {
  const [lang, setLang] = useState("az");

  const current = languages.find((l) => l.value === lang);

  return (
    <Select value={lang} onValueChange={setLang}>
      <SelectTrigger
        className="
          h-7 w-16
          border-none bg-transparent
          text-[12px]
          text-[rgba(138,138,138,1)]
          focus:ring-0
          flex items-center justify-between
        "
      >
        <span>{current?.label}</span>
      </SelectTrigger>

      <SelectContent
        className="
          w-6.25
          h-11.5
          rounded-[3.93px]
          bg-[rgba(255,255,255,0.76)]
          backdrop-blur-[45.3px]
          shadow-[0px_0.91px_2.72px_rgba(125,125,125,0.25)]
          border border-white/40
          p-0
          overflow-hidden
        "
      >
        <SelectPrimitive.Viewport className="h-full w-full">
          {languages
            .filter((item) => item.value !== lang)
            .map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="
                  h-4.5
                  text-[12px]
                  flex items-center justify-center
                  leading-none
                  rounded-xs
                  focus:bg-white/60
                  data-[state=checked]:bg-transparent
                "
              >
                {item.label}
              </SelectItem>
            ))}
        </SelectPrimitive.Viewport>
      </SelectContent>
    </Select>
  );
}
