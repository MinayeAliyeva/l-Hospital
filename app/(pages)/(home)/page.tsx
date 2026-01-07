import Image from "next/image";
import Doctors from './_components/Doctors';
import Hero from './_components/Hero';
import InfoCards from './_components/InfoCards';
import PatientReviews from './_components/PatientReviews';
import UsefulInfo from './_components/UsefulInfo';
import WhyLorHospital from './_components/WhyLorHospital';

const HomePage = () => {
return (
    <div className="min-h-screen bg-[#ffffff] overflow-hidden w-full min-w-360 relative">
      <Hero />
      <InfoCards />
      <Doctors />
      <UsefulInfo />
      <WhyLorHospital />
      <PatientReviews />
      <Image
        className="fixed top-128.75 right-15.75 w-20.75 h-20.75 z-50"
        alt="Whatsapp"
        src="/images/whassap.svg"
        width={12}
        height={12}
      />

      <Image
        className="fixed top-154 right-15.75 w-20.75 h-20.75 z-50"
        alt="Phone"
        src="/images/phone.svg"
        width={12}
        height={12}
      />
    </div>
  );
}

export default HomePage