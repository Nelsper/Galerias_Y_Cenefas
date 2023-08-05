import './scss/footer.css';
import logo from "../../assets/img/logos/LogoWhite.svg";

const Footer = () => {

    return(
        <>
            <footer className='footer'>
                <img src={logo} alt="Logo Galerias y Cenefas" className="logotipo"/>
                <ul className="footer__items">
                    <li className='footer__item'>Inicio</li>
                    <li className='footer__item'>Nosotros</li>
                    <li className='footer__item'>Contacto</li>
                    <li className='footer__item'>Cortinas</li>
                    <li className='footer__item'>Servicios</li>
                </ul>
            </footer>
                <div className="redes">
                    1
                </div>
        </>
    );
};

export default Footer;