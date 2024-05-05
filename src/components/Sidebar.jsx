import { Avatar } from '@radix-ui/react-avatar';
import {
  ActivityIcon,
  LogOutIcon,
  LucideLayoutDashboard,
  Settings,
  User,
  Users,
} from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideImg from '../assets/feedback7.png';

function Sidebar() {
  return (
  <div className=''>
      <Navbar
      expand="lg"
      className="bg-body-tertiary float-left min-h-screen w-1/6 "
    >
      <Container fluid>
        <Navbar.Collapse className="absolute top-0 " id="navbarScroll">
          <Nav className="flex">
            <div className="space-y-4 p-4 ">
              <img
                src={SideImg}
                className="w-32 h-10  border-b mix-blend-multiply "
              />

              <div className="flex bg-blue-100 p-2 text-blue-600 rounded-sm">
                <LucideLayoutDashboard className="mx-2" /> <Link to='/admin' style={{textDecorationLine:"none",color:"rgb(37 99 235)"}}>Dashboard</Link>
              </div>
              <div className="flex ">
                <ActivityIcon className="mx-2" /><Link style={{textDecorationLine:"none",color:"#777"}}>Activities</Link>
              </div>

              <div className="flex ">
                <Users className="mx-2" />
                <Link to="/users" style={{textDecorationLine:"none",color:"#777"}}>Users</Link>
              </div>
              <div className="flex border-b pb-5 ">
                <Settings className="mx-2" />
                <Link to="/setting" style={{textDecorationLine:"none",color:"#777"}}>Settings</Link>
              </div>

              <div className="flex mt-5">
                <LogOutIcon className="mx-2" />
                <Link style={{textDecorationLine:"none",color:"#777"}}>Logout</Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Sidebar;
