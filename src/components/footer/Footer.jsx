import React from "react";
import "./scss/footer.css";
import logo from "../../assets/img/logos/LogoWhite.svg";
import logo2 from "../../assets/img/logos/Name2.svg"


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={logo2} alt="Logo Galerias y Cenefas" className="logotipo" />

        <Nav id="footer__items">
          <Nav.Link id="footer__item" as={Link} to='/inicio'>Inicio</Nav.Link>
          <Nav.Link id="footer__item" as={Link} to="/contacto">Contacto</Nav.Link>
          <Nav.Link id="footer__item" as={Link} to="/nosotros">Nosotros</Nav.Link>
          <Nav.Link id="footer__item" as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link id="footer__item" as={Link} to="/servicios">Servicios</Nav.Link>
        </Nav>
        
      </footer>
      
      <div className="redes">
      <a href=""><i className="bi bi-facebook icon"></i></a>
      <a href="https://api.whatsapp.com/send/?phone=573107878993&text=Hola!%0AC%C3%B3mo%20podemos%20ayudarte%20%3F" target="_blank"><i className="bi bi-whatsapp icon"></i></a>
      <a href=""><i className="bi bi-instagram icon"></i></a>
      </div>
    </>
  );
};

export default Footer;
