import Carousel from "react-bootstrap/Carousel";
import "./scss/carrusel.css";

import imgCarrusel_1 from "../../assets/img/carrusel/Cyber.jpg";
import imgCarrusel_2 from "../../assets/img/carrusel/Flayer.jpg";
import imgCarrusel_3 from "../../assets/img/carrusel/Friday.jpg";

const Carrusel = () => {
  return (
    <>
      <section>
        <Carousel fade className="carrusel">
          <Carousel.Item>
            <img src={imgCarrusel_1} className="d-block w-100"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={imgCarrusel_2} className="d-block w-100" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={imgCarrusel_3} className="d-block w-100" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Carrusel;
