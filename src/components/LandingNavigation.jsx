import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideImg from '../assets/feedback7.png';

function LandingNavigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="/landing-page"> <img src={SideImg} className='h-10 rounded-sm mix-blend-multiply' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto float-end">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/create-account"><span className='text-violet-400'>Create Account</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LandingNavigation;