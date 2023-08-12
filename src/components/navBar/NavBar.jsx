import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logos/GaleriasCenefas.svg"
import './scss/navBar.css';

const NavBar = () => {
  return (
    <>
    <header>
      <Navbar expand="lg" className="navBar fixed-top z-3">
        <Container>
        <Navbar.Brand as={Link} to="/inicio"><img src={logo} width={250}  alt="logo página" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" items">

              <Nav.Link className="item" as={Link} to="/inicio">Inicio</Nav.Link>
              <Nav.Link className="item" as={Link} to="/contacto">Contacto</Nav.Link>
              <Nav.Link className="item" as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link className="item" as={Link} to="/blog">Blog</Nav.Link>

              <NavDropdown title="Cortinas" id="itemActive">
                <NavDropdown.Item as={Link} to="/romana">Romana</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Ondas
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
