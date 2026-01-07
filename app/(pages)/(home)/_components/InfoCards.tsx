'use client';


const infoData = [
  {
    icon: '/images/stethoscope.svg',
    title: 'Qafqazın ilk və tək',
    subtitle: 'ixtisaslaşmış mərkəzi',
  },
  {
    icon: '/images/users.svg',
    title: '12 illik+',
    subtitle: 'təcrübə',
  },
  {
    icon: '/images/shield.svg',
    title: 'Pasiyent',
    subtitle: 'yönümlü xidmət',
  },
];

export default function InfoCards() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {infoData.map((info, index) => (
            <div
              key={index}
              className="flex items-center w-[295px] h-[68px] p-4"
            >
              <div className="w-12 h-12 flex-shrink-0">
                <img src={info.icon} alt={info.title} className="w-full h-full" />
              </div>

              <div className="ml-4 flex flex-col justify-center">
                <h3
                  className="
                    font-[AvantGarde] font-bold
                    text-[22.86px] leading-[31.27px] tracking-[0%]
                    text-gray-900
                  "
                >
                  {info.title}
                </h3>

                <span
                  className="
                    font-[AvantGarde] font-normal
                    text-[22.86px] leading-[31.27px] tracking-[0%]
                    text-gray-600
                  "
                >
                  {info.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
