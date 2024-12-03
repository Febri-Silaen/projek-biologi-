import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import '../../styles/Pteridophyta.css';

const Bryophyta = () => {
  return (
    <section className="bryophyta-section">
      <h1 className="text-center mb-4">Bryophyta (Tumbuhan Lumut)</h1>
      <Row className="gy-4 align-items-center">
        {/* Deskripsi */}
        <Col md={6}>
          <div className="description">
            <h2>Apa itu Bryophyta?</h2>
            <p>
              Bryophyta atau tumbuhan lumut adalah kelompok tumbuhan kecil yang
              tidak memiliki jaringan pembuluh sejati. Mereka tidak memiliki
              akar, batang, dan daun sejati, namun memiliki struktur yang
              menyerupai organ-organ tersebut. Tumbuhan ini bereproduksi
              menggunakan spora dan membutuhkan lingkungan lembap untuk tumbuh.
            </p>
            <p>
              Bryophyta berperan penting dalam ekosistem, seperti mencegah
              erosi tanah, menyerap air hujan, dan sebagai habitat mikro bagi
              hewan kecil.
            </p>
          </div>
        </Col>

        {/* Gambar */}
        <Col md={6}>
          <Card className="image-card shadow">
            <Card.Img
              variant="top"
              src="./images/Bryophyta.jpg"
              alt="Bryophyta"
              className="img-fluid"
            />
            <Card.Body>
              <Card.Text className="text-muted">
                Contoh lumut yang sering dijumpai: lumut hati (*Marchantia*) dan
                lumut daun (*Polytrichum*).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ciri-Ciri */}
      <div className="features mt-5">
        <h2 className="text-center mb-3">Ciri-Ciri Bryophyta</h2>
        <ul>
          <li>Tidak memiliki jaringan pengangkut (xilem dan floem).</li>
          <li>Bentuk kecil dan biasanya hidup berkelompok.</li>
          <li>
            Reproduksi menggunakan spora, dengan daur hidup yang melibatkan
            generasi gametofit dan sporofit.
          </li>
          <li>Mampu menyerap air dan nutrisi langsung dari lingkungannya.</li>
        </ul>
      </div>

      {/* Manfaat */}
      <div className="benefits mt-5">
        <h2 className="text-center mb-3">Manfaat Bryophyta</h2>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Mengurangi Erosi</Card.Title>
                <Card.Text>
                  Lumut membantu menjaga kelembapan tanah dan mencegah erosi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Bahan Penahan Air</Card.Title>
                <Card.Text>
                  Lumut digunakan untuk menyerap dan menyimpan air di ekosistem.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Sumber Obat Tradisional</Card.Title>
                <Card.Text>
                  Lumut memiliki senyawa antibakteri dan digunakan dalam
                  pengobatan tradisional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Bryophyta;
