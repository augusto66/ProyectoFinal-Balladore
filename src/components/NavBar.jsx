import { Children } from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="src/assets/CourtMaster_trans.png"
              alt="CourtMaster Logo"
              width="110"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/category/Paletas"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "",
              })}
            >
              Paletas
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/category/Indumentaria"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "",
              })}
            >
              Indumentaria
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/category/Accesorios"
              style={({ isActive }) => ({
                color: isActive ? "orange" : "",
              })}
            >
              Acc. Deportivos
            </Nav.Link>
            <div>
              <CartWidget />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
