import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import '../../styles/Pteridophyta.css';

const Pteridophyta = () => {
  return (
    <section className="pteridophyta-section">
      <h1 className="text-center mb-4">Pteridophyta (Tumbuhan Paku)</h1>
      <Row className="gy-4 align-items-center">
        {/* Deskripsi */}
        <Col md={6}>
          <div className="description">
            <h2>Apa itu Pteridophyta?</h2>
            <p>
              Pteridophyta, atau tumbuhan paku, adalah salah satu jenis tumbuhan
              yang memiliki jaringan pembuluh sejati (xilem dan floem). Tumbuhan
              ini memiliki akar, batang, dan daun sejati, namun bereproduksi
              menggunakan spora, bukan biji. Tumbuhan paku sering ditemukan di
              lingkungan lembap atau teduh.
            </p>
            <p>
              Pteridophyta termasuk ke dalam kelompok tumbuhan tanpa bunga yang
              memiliki daur hidup **metagenesis**, yaitu pergantian antara
              generasi sporofit dan gametofit. Generasi sporofit biasanya lebih
              dominan dibandingkan gametofit.
            </p>
          </div>
        </Col>

        {/* Gambar */}
        <Col md={6}>
          <Card className="image-card shadow">
            <Card.Img
              variant="top"
              src="./images/Pteridophyta.jpg"
              alt="Pteridophyta"
              className="img-fluid"
            />
            <Card.Body>
              <Card.Text className="text-muted">
                Contoh tumbuhan paku yang sering dijumpai: paku tanduk rusa,
                suplir, dan paku ekor kuda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ciri-Ciri */}
      <div className="features mt-5">
        <h2 className="text-center mb-3">Ciri-Ciri Pteridophyta</h2>
        <ul>
          <li>
            Memiliki jaringan pembuluh sejati untuk transportasi air dan
            nutrisi.
          </li>
          <li>
            Reproduksi menggunakan spora yang dihasilkan di sporangium
            (biasanya di bagian bawah daun).
          </li>
          <li>
            Hidup di lingkungan lembap dan teduh, baik di daratan maupun air.
          </li>
          <li>
            Memiliki akar, batang, dan daun sejati (kormus).
          </li>
          <li>
            Tidak menghasilkan bunga atau biji.
          </li>
        </ul>
      </div>

      {/* Manfaat */}
      <div className="benefits mt-5">
        <h2 className="text-center mb-3">Manfaat Tumbuhan Paku</h2>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Pupuk Hijau</Card.Title>
                <Card.Text>
                  Beberapa jenis tumbuhan paku, seperti *Azolla*, digunakan
                  sebagai pupuk hijau untuk meningkatkan kesuburan tanah.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Tanaman Hias</Card.Title>
                <Card.Text>
                  Tumbuhan paku seperti suplir dan tanduk rusa sering dijadikan
                  tanaman hias karena keindahan daunnya.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="benefit-card">
              <Card.Body>
                <Card.Title className="text-success">Obat Herbal</Card.Title>
                <Card.Text>
                  Beberapa spesies tumbuhan paku dimanfaatkan dalam pengobatan
                  tradisional, seperti untuk menyembuhkan luka.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Pteridophyta;
