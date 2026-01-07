import { Search } from "lucide-react"

export default function SearchInput() {
  return (
    <div
      className="
        flex items-center gap-2
        w-34.75 h-11.25
        px-4
        border border-[rgba(232,232,232,1)]
        rounded-full
        bg-white
      "
    >
      <Search className="w-5 h-5 text-[rgba(138,138,138,1)]" />

      <input
        placeholder="Axtarış"
        className="
          w-full
          bg-transparent
          outline-none
          font-[Poppins]
          font-normal
          text-[14.76px]
          leading-[19.68px]
          tracking-[-0.05em]
          placeholder:text-[rgba(138,138,138,1)]
        "
      />
    </div>
  )
}
