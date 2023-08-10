import "./scss/tarjetas.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cards from "./data";
import { Link } from "react-router-dom";

const Tarjetas = () => {

  return (
    <>
    <div className="cards">
      <Row xs={1} sm={3} md={3} lg={4} className="g-4">
        {cards.map((card, idx) => (
          <Col key={idx}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={`../../../public/img_cards/${card.img}`}
                alt={card.alt}
              />
              <Card.Body>
                <Card.Title as={Link} to={card.to} id="titulo">&#9758; {card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
};

export default Tarjetas;
