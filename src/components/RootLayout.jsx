import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import DashboardLayout from '@/Layout/DashboardLayout';
import Sidebar from './Sidebar';
import Navbarpanel from './Navbarpanel';

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
