import Admin from "./Admin";
import Footer from "./Footer";
import Navbarpanel from "./Navbarpanel";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div>
        <Sidebar/>
    <Navbarpanel/>
    <Admin/>
    <Footer />
  
    </div>
  );
};

export default AdminDashboard;
