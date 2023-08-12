import "./scss/newsblog.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import news from "./data";

const NewsBlog = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="cajaNews">
      <h2 className="subNews">No te pierdas nuestros últimos tips</h2>
    </div>
    <div className="contenedor">
      <Slider {...settings}>
        {news.map((item, idx) => {
          return (
            <div key={idx} className="news__cards">
              <Row>
                <Col >
                  <Card className="card">
                    <Card.Img
                      variant="top"
                      src={`../../../public/img_cards/${item.img}`}
                      alt={item.alt}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </Slider>
    </div>
    </>
  );
};

export default NewsBlog;