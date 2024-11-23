import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const materials = [
    {
      title: 'Ruang Lingkup Biologi',
      description: 'Pelajari dasar-dasar dan ruang lingkup ilmu biologi',
      imageUrl: '/images/keanekaragaman.jpg',
      link: './ruang-lingkup',
      color: '#FF6B6B' 
    },
    {
      title: 'Keanekaragaman Hayati',
      description: 'Eksplorasi keanekaragaman makhluk hidup di Indonesia',
      imageUrl: '/images/hewan.jpg',
      link: '/keanekaragaman',
      color: '#4ECDC4'
    },
    {
      title: 'Virus',
      description: 'Eksplorasi materi mengenai virus virus',
      imageUrl: '/images/virus.jpg',
      link: './virus',
      color: '#45B7D1'
    },
    {
      title: 'Plantae',
      description: 'Eksplorasi materi mengenai plantae',
      imageUrl: '/images/plantae.jpg',
      link: './plantae',
      color: '#96CEB4'
    },
    {
      title: 'Protista',
      description: 'Eksplorasi materi mengenai protista',
      imageUrl: '/images/protista.jpeg',
      link: './protista',
      color: '#D4A5A5'
    },
    {
      title: 'Animalia',
      description: 'Eksplorasi materi mengenai Animalia',
      imageUrl: '/images/animalia.webp',
      link: './Animalia',
      color: '#FFB347'
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SIBISUK MARBIOLOGI</h1>
          <p className="hero-subtitle">Platform Pembelajaran Biologi Kelas 10</p>
          <p className="hero-description">
            Belajar biologi jadi lebih menyenangkan dan interaktif
          </p>
          <button className="cta-button" onClick={() => navigate('/Keanekaragaman')}>
            Mulai Belajar
          </button>
        </div>
        <div className="hero-image">
       
        </div>
      </div>

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
            <p>Kuis dan games untuk menguji pemahaman</p>
          </div>
        </div>
      </div>

      <div className="materials-section">
        <h2 className="section-title">Materi Pembelajaran</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div 
              key={index}
              className="material-card"
              style={{'--card-color': material.color}}
              onClick={() => navigate(material.link)}
            >
              <div className="card-image">
                <img src={material.imageUrl} alt={material.title} />
              </div>
              <div className="card-content">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


