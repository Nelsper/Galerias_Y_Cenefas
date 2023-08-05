import "./scss/newsblog.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import news from "./data";

const NewsBlog = () => {
  return (
    <>
      <div className="blog__contenedor">

      <div className="news">
      <Row xs={1} sm={3} md={3} lg={4} className="g-4">
        {news.map((noti, idx) => (
          <Col key={idx}>
            <Card className="noti">
              <Card.Img
                variant="top"
                src={`../../../public/img_cards/${noti.img}`}
                alt={noti.alt}
              />
              <Card.Body>
                <Card.Title>{noti.title}</Card.Title>
                <Card.Text>{noti.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
        

        
      </div>
    </>
  );
};

export default NewsBlog;
