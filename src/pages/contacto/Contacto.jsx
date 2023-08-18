import "./scss/contacto.css";
import Tarjetas from "../../components/tarjetas/Tarjetas";

const Contacto = () => {
  return (
    <>
      <header>
        <h1 id="contacto__titulo">Galerias y Cenefas</h1>
        <p>
          Descubre un mundo de estilo y comodidad en
          <strong> Galerias y Cenefas</strong>. Transforma tus espacios con
          nuestras selecciones únicas.
          <br />
          ¡Te esperamos para dar vida a tus ventanas!
        </p>
      </header>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63631.65516457893!2d-74.17520219356616!3d4.597883516400813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e3f9ed023c08b65%3A0x304d95eb15d41414!2sGalerias%20y%20Cenefas%2C%20Calle%2041b%20Sur%2C%20Puente%20Aranda%2C%20Cundinamarca!3m2!1d4.5978847!2d-74.1340025!5e0!3m2!1ses-419!2sco!4v1692196011890!5m2!1ses-419!2sco"
          width="800"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contacto__address">
        <p>
          Calle 41b sur # 52a-56. <br />
          Barrio la <strong>Alquería</strong>, Bogotá.
          <br />
          Tels. 310 787 8993 - 311 559 1492.
          <br />
        </p>

        <span id="spanFollow">¡Siguenos en nuestras redes sociales!</span>
        
        <div className="redesContacto">
          <a href="">
            <i className="bi bi-facebook icon"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=573107878993&text=Hola!%0AC%C3%B3mo%20podemos%20ayudarte%20%3F"
            target="_blank"
          >
            <i className="bi bi-whatsapp icon"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacto;
