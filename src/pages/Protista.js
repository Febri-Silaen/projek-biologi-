import React from 'react';
<<<<<<< Updated upstream
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Protista.css';

const KingdomProtista = () => {
=======
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';

const Protista = () => {
>>>>>>> Stashed changes
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Kingdom Protista</h1>

      <Row className="align-items-center gy-4">
        <Col md={6}>
          <div>
            <h2>Apa itu Protista?</h2>
            <p>
              Protista adalah kingdom yang terdiri dari satu sel atau banyak sel dan memiliki membran inti (organisme eukariot). 
              Protista dapat dikelompokkan menjadi tiga bagian yaitu menyerupai hewan (protozoa), menyerupai tumbuhan (Ganggang), 
              dan menyerupai jamur. Sebagian besar Protista hidup di air karena tidak memiliki pelindung untuk menjaga tubuhnya 
              dari hawa kering. Indonesia sebagai negara megabiodiversitas memiliki kekayaan mikroorganisme, termasuk Protista, 
              yang hingga kini masih belum dimanfaatkan secara maksimal.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image
            src="./images/kingdomprotista.jpeg" 
            alt="Protista Illustration"
            fluid
            rounded
            className="img-fluid shadow-sm"
          />
        </Col>
      </Row>

      <h1 className="text-center mb-4">Klasifikasi Kingdom Protista</h1>
      <Row className="gy-4">
        <Col md={4}>
          <Card as={Link} to="/protozoa" className="shadow border-0 text-decoration-none plant-class-card">
            <Card.Img
              variant="top"
              src="./images/Protozoaa.jpg"
              alt="Protista Mirip Hewan"
              className="p-3 img-fluid"
            />
            <Card.Body className="text-center">
              <Card.Title className="text-success fw-bold">Protista Mirip Hewan (Protozoa)</Card.Title>
              <Card.Text>
                Protista uniseluler yang menyerupai hewan. Mereka heterotrof dan dapat bergerak 
                menggunakan pseudopodia, silia, atau flagel.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-light text-center text-muted">
              <small>Jenis: Rhizopoda, Ciliata, Flagellata, Sporozoa</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card as={Link} to="/protista-jamur" className="shadow border-0 text-decoration-none plant-class-card">
            <Card.Img
              variant="top"
              src="./images/MiripJamur.jpg"
              alt="Protista Mirip Jamur"
              className="p-3 img-fluid"
            />
            <Card.Body className="text-center">
              <Card.Title className="text-success fw-bold">Protista Mirip Jamur</Card.Title>
              <Card.Text>
                Protista yang satu ini menghasilkan spora dan hidup di lingkungan lembab. Contohnya 
                adalah Myxomycota, Acrasiomycota, dan Oomycota.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-light text-center text-muted">
              <small>Jenis: Myxomycota, Acrasiomycota, Oomycota</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card as={Link} to="/algae" className="shadow border-0 text-decoration-none plant-class-card">
            <Card.Img
              variant="top"
              src="./images/Alga.jpg"
              alt="Protista Mirip Tumbuhan"
              className="p-3 img-fluid"
            />
            <Card.Body className="text-center">
              <Card.Title className="text-success fw-bold">Protista Mirip Tumbuhan (Algae)</Card.Title>
              <Card.Text>
                Protista ini dapat melakukan fotosintesis. Mereka hidup soliter atau membentuk koloni, 
                seperti Chlorophyta dan Phaeophyta.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-light text-center text-muted">
              <small>Jenis: Chlorophyta, Rhodophyta, Phaeophyta, dll.</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="gy-4 mt-4">
        <Col md={12}>
          <Card className="shadow border-0">
            <Card.Header className="bg-primary text-white">Ciri-Ciri Protista</Card.Header>
            <Card.Body>
              <ul>
                <li>Uniseluler atau multiseluler sederhana.</li>
                <li>Memiliki membran inti (eukariotik).</li>
                <li>Hidup di lingkungan lembap atau perairan.</li>
                <li>Bergerak dengan flagel, silia, atau pseudopodia.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} className="mt-4">
          <Card className="shadow border-0">
            <Card.Header className="bg-info text-white">Manfaat Protista</Card.Header>
            <Card.Body>
              <ul>
                <li>Chlorella digunakan sebagai bahan pembuatan protein sel tunggal (PST).</li>
                <li>Radiolaria dapat dimanfaatkan sebagai bahan penggosok.</li>
                <li>Zooplankton menjadi makanan ikan dan arthropoda air.</li>
                <li>Foraminifera digunakan untuk mendeteksi minyak bumi.</li>
                <li>Paramaecium sebagai indikator pencemaran air oleh zat organik.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default KingdomProtista;
