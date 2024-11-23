import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const Protista = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Kingdom Protista</h1>
      <p>
        Protista adalah kingdom yang terdiri dari satu sel atau banyak sel dan memiliki membran inti (organisme eukariot). 
        Protista dapat dikelompokkan menjadi tiga bagian yaitu menyerupai hewan (protozoa), menyerupai tumbuhan (Ganggang), 
        dan menyerupai jamur. Sebagian besar Protista hidup di air karena tidak memiliki pelindung untuk menjaga tubuhnya 
        dari hawa kering. Indonesia sebagai negara megabiodiversitas memiliki kekayaan mikroorganisme, termasuk Protista, 
        yang hingga kini masih belum dimanfaatkan secara maksimal.
      </p>

      <Row className="gy-4">
        {/* Ciri-Ciri Protista */}
        <Col md={6}>
          <Card>
            <Card.Header className="bg-primary text-white">Ciri-Ciri Kingdom Protista</Card.Header>
            <Card.Body>
              <ul>
                <li>Umumnya uniseluler, tetapi ada juga yang multiseluler sederhana.</li>
                <li>Tipe sel eukariotik dengan membran inti.</li>
                <li>Hidup bebas atau simbiosis, aerob atau anaerob.</li>
                <li>Habitat di tempat lembab, air tawar, atau laut.</li>
                <li>Bersifat heterotrof atau fotoautotrof.</li>
                <li>Bersifat motil dengan alat gerak seperti flagel, silia, atau pseudopodia.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Klasifikasi Protista */}
        <Col md={6}>
          <Card>
            <Card.Header className="bg-success text-white">Klasifikasi Protista</Card.Header>
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Protista Mirip Hewan (Protozoa)</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Protozoa merupakan protista uniseluler yang menyerupai hewan. Ciri utamanya meliputi tidak memiliki dinding 
                      sel, umumnya bersifat heterotrof, hidup bebas atau parasit, dan bereproduksi secara seksual maupun aseksual.
                    </p>
                    <p>Protozoa diklasifikasikan menjadi:</p>
                    <ul>
                      <li><strong>Rhizopoda</strong>: Bergerak dengan pseudopodia (contoh: Amoeba).</li>
                      <li><strong>Ciliata</strong>: Bergerak dengan silia (contoh: Paramecium).</li>
                      <li><strong>Flagellata</strong>: Bergerak dengan flagel (contoh: Trypanosoma).</li>
                      <li><strong>Sporozoa</strong>: Tidak memiliki alat gerak (contoh: Plasmodium).</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Protista Mirip Jamur</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Protista mirip jamur menghasilkan spora dan hidup di tempat lembab. Contohnya adalah Myxomycota 
                      (jamur lendir plasmodial), Acrasiomycota (jamur lendir seluler), dan Oomycota (jamur air).
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Protista Mirip Tumbuhan (Algae)</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Algae mampu melakukan fotosintesis. Mereka dapat hidup soliter atau membentuk koloni. Contoh kelompoknya:
                    </p>
                    <ul>
                      <li><strong>Chlorophyta</strong>: Alga hijau dengan klorofil dominan.</li>
                      <li><strong>Rhodophyta</strong>: Alga merah dengan pigmen fikobilin.</li>
                      <li><strong>Phaeophyta</strong>: Alga cokelat dengan pigmen fukosantin.</li>
                      <li><strong>Bacillariophyta</strong>: Diatom dengan cangkang silikat.</li>
                      <li><strong>Pyrrophyta</strong>: Ganggang api dengan cahaya bioluminesens.</li>
                      <li><strong>Chrysophyta</strong>: Alga emas dengan pigmen karotenoid.</li>
                      <li><strong>Euglenophyta</strong>: Protista dengan sifat autotrof dan heterotrof.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Manfaat dan Dampak Protista */}
      <Row className="gy-4 mt-4">
        <Col md={6}>
          <Card>
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
        <Col md={6}>
          <Card>
            <Card.Header className="bg-danger text-white">Dampak Buruk Protista</Card.Header>
            <Card.Body>
              <ul>
                <li>Entamoeba histolytica menyebabkan disentri pada manusia.</li>
                <li>Trypanosoma gambiense menyebabkan penyakit tidur (trypanosomiasis).</li>
                <li>Leishmania donovani menyebabkan penyakit kala azar.</li>
                <li>Entamoeba gingivalis memperparah radang gusi.</li>
                <li>Trypanosoma evansi menyebabkan penyakit surrah pada hewan ternak.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Protista;
