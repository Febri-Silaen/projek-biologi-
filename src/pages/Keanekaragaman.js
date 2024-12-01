import React, { useState } from 'react';
import '../styles/Keanekaragaman.css';
import { Nav, Tab, Accordion, Card, Button, Badge } from 'react-bootstrap';

const Keanekaragaman = () => {
  const [activeTab, setActiveTab] = useState('pengantar');

  return (
    <div className="keanekaragaman">
  
      <div className="hero-section1">
        <div className="container">
          <h1 className="display-4 text-white">Keanekaragaman Hayati</h1>
          <p className="lead text-white">Memahami Kompleksitas Kehidupan di Bumi</p>
          <div className="hero-badges">
            <Badge bg="primary" className="mx-2">100+ Spesies</Badge>
            <Badge bg="success" className="mx-2">34 Provinsi</Badge>
            <Badge bg="warning" className="mx-2">5 Ekosistem Utama</Badge>
          </div>
        </div>
      </div>

    
      <div className="sticky-nav">
        <Nav variant="pills" className="justify-content-center flex-nowrap overflow-auto" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav.Item>
            <Nav.Link eventKey="pengantar">Pengantar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sejarah">Sejarah</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tingkat">Tingkat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="klasifikasi">Klasifikasi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="indonesia">Indonesia</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="global">Global</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="manfaat">Manfaat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="konservasi">Konservasi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="penelitian">Penelitian</Nav.Link>
          </Nav.Item>
         
        </Nav>
      </div>

     
      <div className="container my-5">
        <Tab.Content>
      
          <Tab.Pane active={activeTab === 'pengantar'}>
            <div className="content-section">
              <div className="section-header">
                <h2>Pengertian Keanekaragaman Hayati</h2>
                <p className="lead text-muted">
                  Memahami fondasi dan konsep dasar keanekaragaman hayati sebagai komponen penting kehidupan di Bumi
                </p>
              </div>

              <div className="row mb-4">
                <div className="col-md-8">
                  <div className="main-content">
                    <h3>Definisi Komprehensif</h3>
                    <p>
                      Keanekaragaman hayati atau biodiversitas mencakup seluruh bentuk kehidupan di Bumi, 
                      dari mikroorganisme hingga ekosistem kompleks. Ini termasuk:
                    </p>
                    <ul>
                      <li>Variasi genetik dalam spesies</li>
                      <li>Keragaman spesies dalam komunitas</li>
                      <li>Variasi ekosistem dalam biosfer</li>
                      <li>Interaksi antara organisme</li>
                      <li>Adaptasi terhadap lingkungan</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stats-card">
                    <h4>Statistik Global</h4>
                    <ul className="list-unstyled">
                      <li>
                        <strong>8.7 juta</strong>
                        <span>Spesies di Bumi</span>
                      </li>
                      <li>
                        <strong>86%</strong>
                        <span>Spesies belum teridentifikasi</span>
                      </li>
                      <li>
                        <strong>1.2 juta</strong>
                        <span>Spesies telah dikatalogkan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="feature-cards">
                <div className="row">
                  <div className="col-md-4">
                    <div className="feature-card">
                      <h3>Aspek Fundamental</h3>
                      <ul>
                        <li>Variabilitas genetik</li>
                        <li>Diferensiasi spesies</li>
                        <li>Kompleksitas ekosistem</li>
                        <li>Interaksi biotik</li>
                        <li>Adaptasi lingkungan</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="feature-card">
                      <h3>Komponen Utama</h3>
                      <ul>
                        <li>Keanekaragaman genetik</li>
                        <li>Keanekaragaman spesies</li>
                        <li>Keanekaragaman ekosistem</li>
                        <li>Keanekaragaman fungsional</li>
                        <li>Keanekaragaman taksonomi</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="feature-card">
                      <h3>Faktor Pengaruh</h3>
                      <ul>
                        <li>Faktor geografis</li>
                        <li>Faktor klimatik</li>
                        <li>Faktor edafik</li>
                        <li>Faktor biotik</li>
                        <li>Faktor antropogenik</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="advanced-concepts mt-5">
                <h3>Konsep Lanjutan</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="concept-card">
                      <h4>Teori Biogeografi</h4>
                      <p>
                        Studi tentang distribusi geografis organisme hidup dan faktor-faktor yang mempengaruhinya:
                      </p>
                      <ul>
                        <li>Pola distribusi spesies</li>
                        <li>Barrier geografis</li>
                        <li>Dispersal dan vikariansi</li>
                        <li>Endemisme</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="concept-card">
                      <h4>Dinamika Populasi</h4>
                      <p>
                        Perubahan ukuran dan komposisi populasi dalam ruang dan waktu:
                      </p>
                      <ul>
                        <li>Pertumbuhan populasi</li>
                        <li>Kapasitas daya dukung</li>
                        <li>Kompetisi interspesifik</li>
                        <li>Predasi dan simbiosis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane active={activeTab === 'sejarah'}>
            <div className="content-section">
              <div className="section-header">
                <h2>Sejarah Keanekaragaman Hayati</h2>
                <p className="lead text-muted">
                  Perjalanan evolusi kehidupan di Bumi dari awal kemunculannya hingga saat ini
                </p>
              </div>

              <div className="timeline-section">
                <div className="era-card">
                  <h3>Era Prakambrium (4.6 milyar - 542 juta tahun lalu)</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Peristiwa Kunci:</h4>
                      <ul>
                        <li>Terbentuknya Bumi</li>
                        <li>Kemunculan kehidupan pertama</li>
                        <li>Evolusi sel prokaryot</li>
                        <li>Munculnya fotosintesis</li>
                        <li>Evolusi sel eukaryot</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Organisme Dominan:</h4>
                      <ul>
                        <li>Bakteria primitif</li>
                        <li>Alga biru-hijau</li>
                        <li>Protista unicellular</li>
                        <li>Organisme multiselular awal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="era-card">
                  <h3>Era Paleozoikum (542 - 251 juta tahun lalu)</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Periode Kambrium (542-488 juta tahun lalu):</h4>
                      <ul>
                        <li>Ledakan Kambrium</li>
                        <li>Munculnya hampir semua filum hewan</li>
                        <li>Evolusi eksoskeleton</li>
                        <li>Diversifikasi arthropoda</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h4>Periode Ordovisium (488-444 juta tahun lalu):</h4>
                      <ul>
                        <li>Radiasi besar invertebrata laut</li>
                        <li>Munculnya ikan pertama</li>
                        <li>Berkembangnya terumbu karang</li>
                        <li>Kepunahan massal pertama</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Lanjutkan dengan era-era berikutnya */}
              </div>
            </div>
          </Tab.Pane>

<Tab.Pane active={activeTab === 'tingkat'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Tingkat Keanekaragaman Hayati</h2>
      <p className="lead text-muted">
        Memahami tiga tingkat utama keanekaragaman hayati dan karakteristiknya
      </p>
    </div>

    <div className="row mb-5">
      <div className="col-md-4">
        <div className="level-card">
          <h3>Keanekaragaman Genetik</h3>
          <p>Variasi dalam material genetik suatu spesies</p>
          <ul>
            <li>Variasi alel dalam populasi</li>
            <li>Perbedaan genotip</li>
            <li>Polimorfisme</li>
            <li>Variasi fenotip</li>
          </ul>
          <div className="example-box">
            <h4>Contoh:</h4>
            <ul>
              <li>Variasi warna bunga mawar</li>
              <li>Perbedaan golongan darah manusia</li>
              <li>Variasi warna bulu kucing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="level-card">
          <h3>Keanekaragaman Spesies</h3>
          <p>Variasi antara spesies dalam suatu komunitas</p>
          <ul>
            <li>Perbedaan morfologi</li>
            <li>Isolasi reproduktif</li>
            <li>Niche ekologi</li>
            <li>Adaptasi spesifik</li>
          </ul>
          <div className="example-box">
            <h4>Contoh:</h4>
            <ul>
              <li>Berbagai jenis burung</li>
              <li>Beragam spesies ikan</li>
              <li>Variasi tumbuhan hutan</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="level-card">
          <h3>Keanekaragaman Ekosistem</h3>
          <p>Variasi habitat dan komunitas biologis</p>
          <ul>
            <li>Faktor abiotik</li>
            <li>Interaksi biotik</li>
            <li>Suksesi ekologi</li>
            <li>Zonasi habitat</li>
          </ul>
          <div className="example-box">
            <h4>Contoh:</h4>
            <ul>
              <li>Ekosistem terumbu karang</li>
              <li>Hutan hujan tropis</li>
              <li>Padang savana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tab.Pane>


<Tab.Pane active={activeTab === 'klasifikasi'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Klasifikasi Makhluk Hidup</h2>
      <p className="lead text-muted">
        Sistem pengorganisasian keanekaragaman hayati secara sistematis
      </p>
    </div>

    <div className="classification-system mb-5">
      <h3>Sistem Klasifikasi</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="taxonomy-card">
            <h4>Taksonomi Tradisional</h4>
            <ul>
              <li>Kingdom</li>
              <li>Filum/Divisio</li>
              <li>Kelas</li>
              <li>Ordo</li>
              <li>Famili</li>
              <li>Genus</li>
              <li>Spesies</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="taxonomy-card">
            <h4>Sistem Three-Domain</h4>
            <ul>
              <li>Archaea</li>
              <li>Bacteria</li>
              <li>Eukarya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="kingdom-section">
      <h3>Kingdom Kehidupan</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Monera</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Organisme prokariotik</li>
              <li>Uniseluler</li>
              <li>Tidak memiliki membran inti</li>
              <li>Contoh: bakteri dan archaea</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Protista</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Organisme eukariotik</li>
              <li>Mayoritas uniseluler</li>
              <li>Memiliki membran inti</li>
              <li>Contoh: alga, protozoa</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Fungi</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Organisme eukariotik</li>
              <li>Heterotrof</li>
              <li>Dinding sel dari kitin</li>
              <li>Contoh: jamur, ragi, kapang</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Plantae</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Organisme eukariotik multiseluler</li>
              <li>Autotrof (fotosintesis)</li>
              <li>Dinding sel dari selulosa</li>
              <li>Contoh: tumbuhan tingkat tinggi dan rendah</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Animalia</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Organisme eukariotik multiseluler</li>
              <li>Heterotrof</li>
              <li>Tidak memiliki dinding sel</li>
              <li>Contoh: vertebrata dan invertebrata</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
</Tab.Pane>


<Tab.Pane active={activeTab === 'indonesia'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Keanekaragaman Hayati Indonesia</h2>
      <p className="lead text-muted">
        Indonesia sebagai negara megabiodiversitas dengan kekayaan flora dan fauna yang melimpah
      </p>
    </div>

    <div className="statistics-overview mb-5">
      <div className="row">
        <div className="col-md-3">
          <div className="stat-card">
            <h3>17%</h3>
            <p>Total biodiversitas dunia</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card">
            <h3>515</h3>
            <p>Spesies mamalia</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card">
            <h3>1.539</h3>
            <p>Spesies burung</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card">
            <h3>45.000</h3>
            <p>Spesies tumbuhan</p>
          </div>
        </div>
      </div>
    </div>

    <div className="biodiversity-regions mb-5">
      <h3 className="section-title">Kawasan Keanekaragaman Hayati</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="region-card">
            <h4>Kawasan Barat</h4>
            <div className="region-content">
              <ul>
                <li>Meliputi Sumatera, Jawa, Kalimantan</li>
                <li>Tipe fauna Oriental (Asia)</li>
                <li>Spesies kunci: Orangutan, Harimau, Badak</li>
                <li>Dominasi hutan hujan tropis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="region-card">
            <h4>Kawasan Wallacea</h4>
            <div className="region-content">
              <ul>
                <li>Meliputi Sulawesi, Maluku, Nusa Tenggara</li>
                <li>Zona transisi biogeografi</li>
                <li>Spesies kunci: Anoa, Babirusa, Maleo</li>
                <li>Tingkat endemisme tinggi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="region-card">
            <h4>Kawasan Timur</h4>
            <div className="region-content">
              <ul>
                <li>Meliputi Papua dan sekitarnya</li>
                <li>Tipe fauna Australis</li>
                <li>Spesies kunci: Cendrawasih, Kanguru pohon</li>
                <li>Ekosistem pegunungan unik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="ecosystem-types mb-5">
      <h3 className="section-title">Tipe Ekosistem</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="ecosystem-card">
            <h4>Ekosistem Darat</h4>
            <ul>
              <li>Hutan hujan tropis</li>
              <li>Hutan musim</li>
              <li>Savana</li>
              <li>Pegunungan</li>
              <li>Hutan Mangrove</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="ecosystem-card">
            <h4>Ekosistem Perairan</h4>
            <ul>
              <li>Terumbu karang</li>
              <li>Padang lamun</li>
              <li>Estuari</li>
              <li>Danau dan sungai</li>
              <li>Rawa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tab.Pane>

{/* Tab Global */}
<Tab.Pane active={activeTab === 'global'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Keanekaragaman Hayati Global</h2>
      <p className="lead text-muted">
        Distribusi dan pola keanekaragaman hayati di tingkat global
      </p>
    </div>

    <div className="biodiversity-hotspots mb-5">
      <h3 className="section-title">Hotspot Biodiversitas Dunia</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="hotspot-card">
            <h4>Asia-Pasifik</h4>
            <ul>
              <li>Sundaland</li>
              <li>Wallacea</li>
              <li>Philippines</li>
              <li>West Papua</li>
              <li>Eastern Himalayas</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="hotspot-card">
            <h4>Amerika</h4>
            <ul>
              <li>Amazon Basin</li>
              <li>Atlantic Forest</li>
              <li>Caribbean Islands</li>
              <li>Mesoamerica</li>
              <li>Andes Mountains</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="hotspot-card">
            <h4>Afrika</h4>
            <ul>
              <li>Madagascar</li>
              <li>Eastern Arc Mountains</li>
              <li>Cape Floristic Region</li>
              <li>Congo Basin</li>
              <li>Horn of Africa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="global-challenges mb-5">
      <h3 className="section-title">Tantangan Global</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="challenge-card">
            <h4>Ancaman Utama</h4>
            <ul>
              <li>Deforestasi dan fragmentasi habitat</li>
              <li>Perubahan iklim global</li>
              <li>Polusi dan pencemaran</li>
              <li>Eksploitasi berlebihan</li>
              <li>Invasi spesies asing</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="challenge-card">
            <h4>Dampak</h4>
            <ul>
              <li>Kepunahan spesies</li>
              <li>Degradasi ekosistem</li>
              <li>Gangguan rantai makanan</li>
              <li>Hilangnya jasa ekosistem</li>
              <li>Krisis biodiversitas global</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tab.Pane>

{/* Tab Manfaat */}
<Tab.Pane active={activeTab === 'manfaat'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Manfaat Keanekaragaman Hayati</h2>
      <p className="lead text-muted">
        Nilai dan fungsi keanekaragaman hayati bagi kehidupan dan kesejahteraan manusia
      </p>
    </div>

    <div className="benefit-categories mb-5">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="benefit-card">
            <h4>Manfaat Ekonomi</h4>
            <ul>
              <li>Sumber pangan</li>
              <li>Bahan obat-obatan</li>
              <li>Material industri</li>
              <li>Ekoturisme</li>
              <li>Produk komersial</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="benefit-card">
            <h4>Manfaat Ekologi</h4>
            <ul>
              <li>Penyerbukan</li>
              <li>Pengendali hama</li>
              <li>Siklus nutrient</li>
              <li>Penyerap karbon</li>
              <li>Stabilitas ekosistem</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="benefit-card">
            <h4>Manfaat Sosial-Budaya</h4>
            <ul>
              <li>Nilai spiritual</li>
              <li>Warisan budaya</li>
              <li>Rekreasi</li>
              <li>Edukasi</li>
              <li>Estetika</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="benefit-card">
            <h4>Manfaat Ilmiah</h4>
            <ul>
              <li>Penelitian</li>
              <li>Pengembangan obat</li>
              <li>Bioteknologi</li>
              <li>Inovasi</li>
              <li>Studi evolusi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="ecosystem-services mb-5">
      <h3 className="section-title">Jasa Ekosistem</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="service-card">
            <h4>Jasa Penyediaan</h4>
            <ul>
              <li>Pangan dan air bersih</li>
              <li>Bahan bakar dan energi</li>
              <li>Sumber daya genetik</li>
              <li>Senyawa biokimia</li>
              <li>Material alam</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="service-card">
            <h4>Jasa Pengaturan</h4>
            <ul>
              <li>Regulasi iklim</li>
              <li>Pengendalian penyakit</li>
              <li>Purifikasi air</li>
              <li>Perlindungan bencana</li>
              <li>Pemurnian udara</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tab.Pane>

<Tab.Pane active={activeTab === 'konservasi'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Konservasi Keanekaragaman Hayati</h2>
      <p className="lead text-muted">
        Upaya pelestarian dan perlindungan keanekaragaman hayati untuk keberlanjutan ekosistem
      </p>
    </div>

    <div className="conservation-strategies">
      <h3>Strategi Konservasi</h3>
      <div className="row">
        <div className="col-md-6">
          <Card className="mb-4">
            <Card.Header>Konservasi In-Situ</Card.Header>
            <Card.Body>
              <ul>
                <li>Taman Nasional</li>
                <li>Cagar Alam</li>
                <li>Suaka Margasatwa</li>
                <li>Hutan Lindung</li>
                <li>Kawasan Konservasi Perairan</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="mb-4">
            <Card.Header>Konservasi Ex-Situ</Card.Header>
            <Card.Body>
              <ul>
                <li>Kebun Raya</li>
                <li>Kebun Binatang</li>
                <li>Bank Genetik</li>
                <li>Penangkaran</li>
                <li>Laboratorium Kultur Jaringan</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

    <div className="conservation-programs mt-4">
      <h3>Program Konservasi Prioritas</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Perlindungan Spesies Terancam Punah</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Program breeding in captivity</li>
              <li>Rehabilitasi habitat</li>
              <li>Corridor establishment</li>
              <li>Monitoring populasi</li>
              <li>Penegakan hukum konservasi</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Restorasi Ekosistem</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Reboisasi hutan</li>
              <li>Rehabilitasi terumbu karang</li>
              <li>Restorasi mangrove</li>
              <li>Pemulihan lahan kritis</li>
              <li>Pengendalian spesies invasif</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

    <div className="community-involvement mt-4">
      <h3>Pelibatan Masyarakat</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="involvement-card">
            <h4>Edukasi</h4>
            <ul>
              <li>Penyuluhan</li>
              <li>Workshop</li>
              <li>Program sekolah</li>
              <li>Media kampanye</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="involvement-card">
            <h4>Pemberdayaan</h4>
            <ul>
              <li>Ekowisata</li>
              <li>HHBK</li>
              <li>Pertanian organik</li>
              <li>Kerajinan lokal</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="involvement-card">
            <h4>Monitoring</h4>
            <ul>
              <li>Citizen science</li>
              <li>Patroli komunitas</li>
              <li>Pemantauan berbasis desa</li>
              <li>Pelaporan partisipatif</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</Tab.Pane>

{/* Penelitian Tab */}
<Tab.Pane active={activeTab === 'penelitian'}>
  <div className="content-section">
    <div className="section-header">
      <h2>Penelitian Keanekaragaman Hayati</h2>
      <p className="lead text-muted">
        Perkembangan dan inovasi dalam studi biodiversitas
      </p>
    </div>

    <div className="research-areas">
      <h3>Bidang Penelitian Utama</h3>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Header>Taksonomi & Sistematika</Card.Header>
            <Card.Body>
              <ul>
                <li>DNA Barcoding</li>
                <li>Filogenetika molekuler</li>
                <li>Taksonomi integratif</li>
                <li>Revisi taksonomi</li>
                <li>Identifikasi spesies baru</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Header>Ekologi & Evolusi</Card.Header>
            <Card.Body>
              <ul>
                <li>Dinamika populasi</li>
                <li>Interaksi spesies</li>
                <li>Adaptasi</li>
                <li>Biogeografi</li>
                <li>Spesiasi</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Header>Bioteknologi</Card.Header>
            <Card.Body>
              <ul>
                <li>Rekayasa genetika</li>
                <li>Bioprospeksi</li>
                <li>Konservasi genetik</li>
                <li>Kultur jaringan</li>
                <li>Bioremediasi</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

    <div className="research-methods mt-4">
      <h3>Metode Penelitian Modern</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Teknologi Molekuler</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Next-generation sequencing</li>
              <li>Genomika populasi</li>
              <li>Metagenomika</li>
              <li>CRISPR gene editing</li>
              <li>Environmental DNA (eDNA)</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Remote Sensing & GIS</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Satellite imaging</li>
              <li>LiDAR scanning</li>
              <li>Drone mapping</li>
              <li>Species distribution modeling</li>
              <li>Habitat connectivity analysis</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
</Tab.Pane>

        </Tab.Content>
      </div>
    </div>
  );
};

export default Keanekaragaman;
