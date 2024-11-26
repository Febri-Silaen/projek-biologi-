import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Protozoa.css';

const Protozoa = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Protista Mirip Hewan (Protozoa)</h1>
      <p>
        Protozoa adalah organisme uniseluler yang termasuk dalam kingdom Protista dan menyerupai hewan. 
        Mereka hidup secara heterotrof, yang berarti memperoleh makanan dengan memakan organisme lain. 
        Protozoa biasanya ditemukan di lingkungan berair, baik air tawar maupun air laut, serta di tanah lembap. 
        Beberapa Protozoa hidup bebas, sementara yang lain bersifat parasit dan dapat menyebabkan penyakit 
        pada manusia dan hewan. Protozoa bergerak dengan menggunakan alat gerak seperti pseudopodia, silia, atau flagel.
      </p>

      <h2 className="text-center my-4">Jenis-Jenis Protozoa</h2>
      <Row className="gy-4">
        {/* Rhizopoda */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Rhizopoda"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-success fw-bold">Rhizopoda</Card.Title>
              <Card.Text>
                Rhizopoda bergerak menggunakan pseudopodia (kaki semu). Contohnya adalah *Amoeba sp.*, 
                yang hidup di air tawar atau tanah lembap. Rhizopoda memakan partikel makanan dengan 
                cara fagositosis, yaitu melingkupi makanan menggunakan pseudopodia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Ciliata */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Ciliata"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-success fw-bold">Ciliata</Card.Title>
              <Card.Text>
                Ciliata menggunakan silia (rambut getar) untuk bergerak dan mendapatkan makanan. 
                Contohnya adalah *Paramecium sp.*, yang memiliki bentuk tubuh menyerupai sandal dan 
                hidup di air tawar. Silia juga berfungsi membantu mendorong makanan ke mulut sel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Flagellata */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Flagellata"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-success fw-bold">Flagellata</Card.Title>
              <Card.Text>
                Flagellata bergerak dengan menggunakan flagel (bulu cambuk). Contohnya adalah *Euglena sp.*, 
                yang unik karena dapat hidup sebagai autotrof (dengan fotosintesis) dan heterotrof. 
                Flagellata juga dapat hidup sebagai parasit, misalnya *Trypanosoma*, penyebab penyakit tidur.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Sporozoa */}
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/300x200"
              alt="Sporozoa"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-success fw-bold">Sporozoa</Card.Title>
              <Card.Text>
                Sporozoa tidak memiliki alat gerak pada fase dewasa dan hidup sebagai parasit. 
                Contohnya adalah *Plasmodium sp.*, yang menyebabkan penyakit malaria pada manusia. 
                Sporozoa berkembang biak melalui spora dan membutuhkan inang untuk melanjutkan siklus hidupnya.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Protozoa;
