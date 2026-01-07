import SideMenu from './_components/SideMenu';
import Doctors from './_components/Doctors';

const DoctorsPage = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <SideMenu />
        <Doctors />
      </div>
    </div>    
  )
}

export default DoctorsPage;
