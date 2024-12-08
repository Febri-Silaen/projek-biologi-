import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const materials = [
    {
      title: 'Keanekaragaman Hayati',
      description: 'Eksplorasi keanekaragaman makhluk hidup di Indonesia',
      imageUrl: '/images/keanekaragaman.jpg',
      link: '/keanekaragaman',
      color: '#C2FFC7'
    },
    {
      title: 'Virus',
      description: 'Eksplorasi materi mengenai virus virus',
      imageUrl: '/images/virus.background.jpg',
      link: '/virus',
      color: '#432E54'
    },
    {
      title: 'Plantae',
      description: 'Eksplorasi materi mengenai plantae',
      imageUrl: '/images/plantae.jpg',
      link: '/plantae',
      color: '#1F4529'
    },
    {
      title: 'Animalia',
      description: 'Eksplorasi materi mengenai Animalia',
      imageUrl: '/images/animalia.webp',
      link: '/animalia',
      color: '#219B9D'
    },
    {
      title: 'Fungi',
      description: 'Jelajahi materi fungi disini',
      imageUrl: '/images/fungi-bg.jpg',
      link: '/fungi',
      color: 'orange'
    },
    {
      title: 'Test Pengetahuan',
      description: 'Uji sejauh mana kemampuan kamu setelah belajar materi di website ini',
      imageUrl: '/images/test.png',
      link: '/quiz',
      color: '#78B3CE'
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section4">
        <div className="hero-content">
          <h1 className="hero-title">SIBISUK MARBIOLOGI</h1>
          <p className="hero-subtitle">Platform Pembelajaran Biologi Kelas 10</p>
          <p className="hero-description">
            Belajar biologi jadi lebih menyenangkan dan interaktif
          </p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/keanekaragaman')}
          >
            Mulai Belajar
          </button>
        </div>
        <div className="hero-image">
          {/* Optional: Add hero image or illustration */}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Mengapa Belajar di Sibisuk?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3>Pembelajaran Terstruktur</h3>
            <p>Materi disusun secara sistematis sesuai kurikulum</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h3>Interaktif</h3>
            <p>Belajar dengan animasi dan ilustrasi menarik</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎮</span>
            <h3>Latihan Seru</h3>
            <p>Kuis untuk menguji pemahaman</p>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="materials-section">
        <h2 className="section-title">Materi Pembelajaran</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div 
              key={index}
              className="material-card"
              style={{'--card-color': material.color}}
            >
              <div 
                className="card-image"
                onClick={() => navigate(material.link)}
                style={{cursor: 'pointer'}}
              >
                <img 
                  src={material.imageUrl} 
                  alt={material.title} 
                />
              </div>
              <div className="card-content">
                <h3 
                  onClick={() => navigate(material.link)} 
                  style={{cursor: 'pointer'}}
                >
                  {material.title}
                </h3>
                <p 
                  onClick={() => navigate(material.link)} 
                  style={{cursor: 'pointer'}}
                >
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Siap Memulai Perjalanan Belajarmu?</h2>
            <p>
              Bergabunglah dengan ribuan siswa yang sudah merasakan 
              kemudahan belajar biologi
            </p>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <i className="fas fa-book-open"></i>
              <span>Materi Lengkap</span>
            </div>
            <div className="cta-feature">
              <i className="fas fa-video"></i>
              <span>Video Interaktif</span>
            </div>
          </div>

          <div className="cta-buttons">
            <button 
              className="primary-btn" 
              onClick={() => navigate('/login')}
            >
              Daftar Sekarang
              <i className="fas fa-arrow-right"></i>
            </button>

            <a 
              href="https://youtu.be/8glI_X1XoBE?si=kQj0OoKjDFzyrRPR" 
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Materi
              <i className="fas fa-play-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
