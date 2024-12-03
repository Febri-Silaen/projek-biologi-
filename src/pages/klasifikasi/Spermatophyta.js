import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import '../../styles/Pteridophyta.css';

const Spermatophyta = () => {
  return (
    <section className="spermatophyta-section">
      <h1 className="text-center mb-4">Spermatophyta (Tumbuhan Berbiji)</h1>
      <Row className="gy-4 align-items-center">
        {/* Deskripsi */}
        <Col md={6}>
          <div className="description">
            <h2>Apa itu Spermatophyta?</h2>
            <p>
              Spermatophyta atau tumbuhan berbiji adalah kelompok tumbuhan yang
              berkembang biak menggunakan biji. Tumbuhan ini memiliki akar,
              batang, dan daun sejati serta jaringan pengangkut (xilem dan
              floem). Spermatophyta terbagi menjadi dua kelompok utama, yaitu
              Gymnospermae (berbiji terbuka) dan Angiospermae (berbiji tertutup).
            </p>
            <p>
              Tumbuhan berbiji memiliki peran penting dalam kehidupan manusia
              sebagai sumber pangan, bahan baku industri, dan obat-obatan.
            </p>
          </div>
        </Col>

        {/* Gambar */}
        <Col md={6}>
          <Card className="image-card shadow">
            <Card.Img
              variant="top"
              src="./images/Spermatophyta.jpg"
              alt="Spermatophyta"
              className="img-fluid"
            />
            <Card.Body>
              <Card.Text className="text-muted">
                Contoh tumbuhan berbiji: padi, jagung, mangga, dan pinus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ciri-Ciri */}
      <div className="features mt-5">
        <h2 className="text-center mb-3">Ciri-Ciri Spermatophyta</h2>
        <ul>
          <li>Memiliki akar, batang, daun sejati, dan jaringan pengangkut.</li>
          <li>Reproduksi menggunakan biji.</li>
          <li>Terbagi menjadi Gymnospermae dan Angiospermae.</li>
          <li>Memiliki bunga (pada Angiospermae) sebagai alat reproduksi.</li>
        </ul>
      </div>

      {/* Manfaat */}
      <div className="benefits mt-5">
        <h2 className="text-center mb-3">Manfaat Spermatophyta</h2>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Sumber Makanan</Card.Title>
                <Card.Text>
                  Tumbuhan berbiji seperti padi, jagung, dan gandum menjadi
                  sumber makanan pokok manusia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Bahan Industri</Card.Title>
                <Card.Text>
                  Kayu dari tumbuhan berbiji digunakan untuk konstruksi dan
                  pembuatan kertas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Obat Herbal</Card.Title>
                <Card.Text>
                  Banyak tanaman berbiji yang digunakan untuk pengobatan, seperti
                  jahe dan ginseng.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Spermatophyta;
