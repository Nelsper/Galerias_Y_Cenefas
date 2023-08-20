import Carousel from "react-bootstrap/Carousel";
import "./scss/carrusel.css";

import imgCarrusel_1 from "../../assets/img/carrusel/1.png";
import imgCarrusel_2 from "../../assets/img/carrusel/2.png";
import imgCarrusel_3 from "../../assets/img/carrusel/3.png";

const Carrusel = () => {
  return (
    <>
      <section className="carrusel">
        <Carousel fade >

          <Carousel.Item>
            <img src={imgCarrusel_1} className="d-block w-100"/>
            <Carousel.Caption>
              {/* Descripción imagen */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={imgCarrusel_2} className="d-block w-100" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={imgCarrusel_3} className="d-block w-100" />
          </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
};

export default Carrusel;
