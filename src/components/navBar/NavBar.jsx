import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logos/LogoWhite.svg"
import './scss/navBar.css';

const NavBar = () => {
  return (
    <>
    <header>
      <Navbar expand="md" className="navBar fixed-top z-3">
        <Container>
        <Navbar.Brand as={Link} to="/inicio"><img src={logo} width={30} alt="logo página" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">

              <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

              <NavDropdown title="Cortinas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </>
  );
};

export default NavBar;
