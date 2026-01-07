import Image from "next/image";
import { Card } from "@/components/ui/card";
import { MdOutlineStar } from "react-icons/md";
const reviews = [
  {
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    avatar: "/images/girl-profile.svg",
    rating: 5,
  },
  {
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    avatar: "/images/girl-profile.svg",
    rating: 5,
  },
  {
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    avatar: "/images/girl-profile.svg",
    rating: 5,
  },
];

export default function PatientReviews() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Pasiyent məmnunluğu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="relative p-6 rounded-xl border-none shadow-sm bg-gray-50"
            >
              <div className="absolute top-5 right-5 w-9 h-9 bg-[rgba(0,149,218,1)] rounded-md flex items-center justify-center text-white text-xl font-bold">
                “
              </div>

              <div className="mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p
                className="
      font-albert
      font-medium
      text-[18.52px]
      leading-none
      capitalize
      text-gray-900
      mb-2
    "
              >
                {review.name}
              </p>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <MdOutlineStar
                    key={i}
                    size={16}
                    className="fill-[rgba(0,149,218,1)] stroke-[rgba(0,149,218,1)]"
                  />
                ))}
              </div>

              <p
                className="
      font-avant
      font-normal
      text-[14px]
      leading-[17px]
      text-gray-600
    "
              >
                {review.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
