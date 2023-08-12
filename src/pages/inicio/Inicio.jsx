import "./scss/inicio.css";
import Carrusel from "../../components/carrusel/Carrusel";
import flayer from "../../assets/img/carrusel/Cyber.jpg";
import Tarjetas from "../../components/tarjetas/Tarjetas";
import NewsBlog from "../../components/newsBlog/NewsBlog";

const Inicio = () => {
  return (
    <>
      <Carrusel />
      <div className="cajaFlayer">
        <a className="subFlayer" href="https://api.whatsapp.com/send/?phone=573107878993&text=Hola!%0AC%C3%B3mo%20podemos%20ayudarte%20%3F" target="_blank">
          &#9755; Conoce nuestras promociones &#9754;
        </a>
      </div>
      <img src={flayer} alt="Flayer" className="flayer d-block w-100" />
      <Tarjetas />
      <NewsBlog />
    </>
  );
};

export default Inicio;
