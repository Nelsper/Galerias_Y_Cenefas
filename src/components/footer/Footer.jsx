import "./scss/footer.css";
import logo from "../../assets/img/logos/LogoWhite.svg";
import logo2 from "../../assets/img/logos/gycFooter.svg"


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={logo2} alt="Logo Galerias y Cenefas" className="logotipo" />
        <ul className="footer__items">
          <li className="footer__item">Inicio</li>
          <li className="footer__item">Contacto</li>
          <li className="footer__item">Nosotros</li>
          <li className="footer__item">Blog</li>
          <li className="footer__item">Cortinas</li>
          <li className="footer__item">Servicios</li>
        </ul>
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
