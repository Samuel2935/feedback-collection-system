import { User2 } from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Navbarpanel() {
  return (
  <div className=''>
      <Navbar expand="lg" className="bg-body-tertiary w-5/6 float-end ">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div className='lg:hidden'>
           <Nav.Link href="" ><Link style={{textDecorationLine:"none", color:"#777"}} to="/users">Users</Link></Nav.Link>
            <Nav.Link href="" ><Link style={{textDecorationLine:"none", color:"#777"}} to="/setting">Settings</Link></Nav.Link>
           
           </div>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search "
              className="me-2"
              aria-label="Search"
            />
          
            <div className="p-2 rounded-full bg-white mx-4">
              <User2 />
            </div>
             {/* <div className="flex justify-center">
                <AvatarDemo className="mx-2" />
              </div> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Navbarpanel;
