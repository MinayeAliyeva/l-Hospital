import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function WhyLorHospital() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div
              className="flex flex-col"
              style={{
                width: "100%", 
                maxWidth: "533px",
                opacity: 0.7,
              }}
            >
              <h2
                className="mb-6"
                style={{
                  fontFamily: "Avant Garde",
                  fontWeight: 700,
                  fontStyle: "bold",
                  fontSize: "45.9px",
                  lineHeight: "120%",
                  letterSpacing: "-3%",
                }}
              >
                Nəyə görə Lor Hospital?
              </h2>

              <p
                className="text-gray-600"
                style={{
                  fontFamily: "Avant Garde",
                  fontWeight: 200,
                  fontSize: "22px",
                  lineHeight: "140%",
                  letterSpacing: "-2%",
                }}
              >
                Lor Hospital – 2013-cü ildən fəaliyyət göstərən Azərbaycanın
                eləcə də Qafqazın ilk və yeganə <br /> ixtisaslaşmış Qulaq Burun Boğaz
                və Baş-Boyun Mərkəzidir. <br /> Azərbaycanda ilk Qulaq Burun Boğaz və
                Baş-Boyun <br />Mərkəzi olmağımızın vermiş olduğu məsuliyyət ilə <br />
                poliklinika, laboratoriya, funksional diaqnostika <br />
                müayinələrindən sonra pasiyentlərimizə daha dəqiq <br /> diaqnoz
                qoyularaq lazımi müalicələr aparılır. <br /> Qüsursuz xidmət anlayışını
                əsas tutaraq Avropa <br /> standartlarına uyğun müasir müalicə və
                diaqnostika <br /> üsulları ilə xidmətlərimizin yüksək keyfiyyətini
                təmin edirik. <br /> Endoskopik, mikroskopik və lazer
                texnologiyalarının  <br />istifadəsi dəqiq diaqnostikaya, hətta ən
                çətin <br /> əməliyyatlar zamanı minimal travmaya, bərpa dövrünü
                qısaltmağa <br /> və qısa müddətdə normal gündəlik həyata qayıtmağa
                imkan yaradır.
              </p>
            </div>

            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[879px] lg:h-[619px] rounded-xl overflow-hidden">
              <Image
                src="/images/why.svg"
                alt="Lor Hospital"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
