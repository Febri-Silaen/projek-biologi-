import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Plantae = () => {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">Kingdom Plantae</h1>
      <Row className="align-items-center gy-4">
        {/* Bagian Kiri: Deskripsi */}
        <Col md={6}>
          <div>
            <h2>Apa itu Plantae?</h2>
            <p>
            Kingdom Plantae atau yang lebih dikenal dengan tumbuhan ialah salah satu
            organisme eukariotik multiseluler dengan dinding sel dan klorofil.
            Klorofil adalah zat hijau daun yang berfungsi dalam proses fotosintesis, 
            sehingga tumbuhan mampu membuat makanannya sendiri (autotroph). 
            Hal inilah yang menjadi pembeda antara Kingdom Plantae dan Kingdom Animalia. 
            Sebagai rajanya tumbuhan, Kingdom Plantae menjadi organisme eukariota multiselulerd 
            yang dapat memperoleh makanan secara autotrof dan segenap besar melalui fotosintesis. 
            </p>
            <p>
            Dengan begitu beragamnya sel penyusun tumbuhan, jaringan yang ada di
            dalamnya, membuat beragam pula jenis tumbuhan yang ada. Dalam buku *Buku
            Ajar Kultur Jaringan Tumbuhan*, kamu dapat mempelajari mengenai kultur
            jaringan tumbuhan.
            </p>
            <p>
              Dalam pengelompokan ilmiah, Kingdom Plantae mencakup ribuan spesies,
              mulai dari tumbuhan sederhana seperti lumut hingga tumbuhan tingkat tinggi
              seperti padi dan pohon besar.
            </p>
            <h2>Ciri-Ciri Kingdom Plantae</h2>
            <ul>
              <li>Multiseluler atau mempunyai banyak sel</li>
              <li>Autotrof, bisa membuat makanan sendiri</li>
              <li>Eukariotik, dengan membran inti sel</li>
              <li>Terdapat dinding sel dari selulosa</li>
              <li>Hidup di daratan lembab atau perairan</li>
            </ul>
          </div>
        </Col>

        {/* Bagian Kanan: Gambar atau Card */}
        <Col md={6}>
          <Card className="shadow plant-card">
            <Card.Img
              variant="top"
              src="./images/Plantae.jpg"
              alt="Kingdom Plantae"
              className="img-fluid rounded"
            />
            <Card.Body>
              <Card.Title className="text-success">Kingdom Plantae</Card.Title>
              <Card.Text>
                Kingdom Plantae adalah organisme yang menghasilkan oksigen, 
                makanan, dan bahan penting bagi manusia dan hewan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Klasifikasi Kingdom Plantae */}
      <Row className="mt-5 gy-4">
        <Col md={12}>
          <h2 className="text-center mb-4">Klasifikasi Kingdom Plantae</h2>
        </Col>
        <Col md={4}>
          <Link to="/pteridophyta" className="text-decoration-none">
            <Card className="shadow plant-class-card">
              <Card.Img
                variant="top"
                src="./images/Pteridophyta.jpg"
                alt="Pteridophyta"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title className="text-center text-success">Pteridophyta</Card.Title>
                <Card.Text>
                  Tumbuhan paku memiliki jaringan pengangkut sejati dan
                  bereproduksi menggunakan spora.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/bryophyta" className="text-decoration-none">
            <Card className="shadow plant-class-card">
              <Card.Img
                variant="top"
                src="./images/Bryophyta.jpg"
                alt="Bryophyta"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title className="text-center text-success">Bryophyta</Card.Title>
                <Card.Text>
                  Tumbuhan lumut tidak memiliki organ sejati seperti akar, batang,
                  dan daun, namun tetap memainkan peran penting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/Spermatophyta" className="text-decoration-none">
            <Card className="shadow plant-class-card">
              <Card.Img
                variant="top"
                src="./images/Spermatophyta.jpg"
                alt="Spermatophyta"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title className="text-center text-success">Spermatophyta</Card.Title>
                <Card.Text>
                  Tumbuhan berbiji yang menjadi dasar tanaman pangan, seperti padi
                  dan gandum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      {/* Manfaat Kingdom Plantae */}
      <div className="mt-5">
        <h2>Manfaat Kingdom Plantae</h2>
        <ul>
          <li>
            Sebagai produsen utama dalam ekosistem, menghasilkan oksigen melalui
            fotosintesis.
          </li>
          <li>Sumber makanan utama manusia, seperti padi, jagung, dan sayur-sayuran.</li>
          <li>Digunakan untuk keperluan industri, seperti bahan kertas, kayu, dan kain.</li>
          <li>
            Sumber bahan obat-obatan tradisional dan modern, seperti *Ginkgo biloba*
            untuk kesehatan.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Plantae;
