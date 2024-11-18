
import { Children } from 'react';
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavBarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" >
            <img
              src="src/assets/CourtMaster_trans.png"
              alt="CourtMaster Logo"
              width="110"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/category/mens-watches'>Relojes</Nav.Link>
            <Nav.Link as={Link} to='/category/sports-accessories'>Acc. Deportivos</Nav.Link>
            <Nav.Link as={Link} to='/category/mobile-accessories'>Tecnologia</Nav.Link>
            <div><CartWidget /></div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBarComponent;