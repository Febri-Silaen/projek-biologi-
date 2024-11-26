import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Protozoa.css';
const Algae = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Protista Mirip Tumbuhan (Algae)</h1>
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div>
            <h2>Apa itu Algae?</h2>
            <p>
              Algae atau ganggang adalah protista mirip tumbuhan yang memiliki klorofil sehingga dapat melakukan fotosintesis. 
              Algae hidup soliter atau membentuk koloni di habitat air atau tempat lembab. Mereka sangat beragam, dari yang mikroskopis 
              hingga makroskopis, seperti ganggang laut.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="/images/Algae.jpg"
            alt="Algae"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
      </Row>

      <Row className="gy-4 mt-4">
        {[
          {
            title: "Chlorophyta",
            description: "Ganggang hijau yang hidup di air tawar dan laut.",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Rhodophyta",
            description: "Ganggang merah yang sering ditemukan di laut tropis.",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Phaeophyta",
            description: "Ganggang coklat yang biasanya hidup di laut dingin.",
            image: "https://via.placeholder.com/150",
          },
        ].map((type, index) => (
          <Col md={4} key={index}>
            <Card className="shadow border-0">
              <Card.Img variant="top" src={type.image} alt={type.title} className="p-3" />
              <Card.Body className="text-center">
                <Card.Title className="text-success fw-bold">{type.title}</Card.Title>
                <Card.Text>{type.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Algae;
