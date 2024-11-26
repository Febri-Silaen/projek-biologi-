import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Protozoa.css';

const ProtistaJamur = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Protista Mirip Jamur</h1>
      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div>
            <h2>Apa itu Protista Mirip Jamur?</h2>
            <p>
              Protista mirip jamur adalah kelompok protista yang menghasilkan spora dan hidup di lingkungan lembab. 
              Mereka berperan penting dalam daur ulang nutrisi di alam. Tidak seperti jamur sejati, dinding selnya 
              tidak terbuat dari kitin, melainkan selulosa. Contoh utama dari protista ini adalah *Myxomycota*, 
              *Acrasiomycota*, dan *Oomycota*.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="/images/ProtistaJamur.jpg"
            alt="Protista Mirip Jamur"
            className="img-fluid rounded shadow-sm"
          />
        </Col>
      </Row>

      <Row className="gy-4 mt-4">
        {[
          {
            title: "Myxomycota",
            description: "Protista jamur lendir yang membentuk massa plasmodium dan dapat bergerak.",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Acrasiomycota",
            description: "Protista yang membentuk agregat seluler dalam kondisi kurang nutrisi.",
            image: "https://via.placeholder.com/150",
          },
          {
            title: "Oomycota",
            description: "Protista jamur air yang hidup di lingkungan akuatik atau tempat lembab.",
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

export default ProtistaJamur;
