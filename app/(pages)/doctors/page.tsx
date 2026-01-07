import SideMenu from './_components/SideMenu';
import Doctors from './_components/Doctors';

const DoctorsPage = () => {
  return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-8">
          <SideMenu />
          <Doctors />
        </div>
      </div>    
  )
}

export default DoctorsPage;
