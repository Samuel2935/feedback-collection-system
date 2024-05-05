import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Navbarpanel from './Navbarpanel';
import AdminDashboard from './AdminDashboard';



const RootLayout = () => {
  return (
    <div>
    
   
   {/* <Sidebar/>
    <Navbarpanel/> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
