import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Home.css';

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
      link: './virus',
      color: '#432E54'
    },
    {
      title: 'Plantae',
      description: 'Eksplorasi materi mengenai plantae',
      imageUrl: '/images/plantae.jpg',
      link: './plantae',
      color: '#1F4529'
    },
    {
      title: 'Protista',
      description: 'Eksplorasi materi mengenai protista',
      imageUrl: '/images/protista.jpeg',
      link: './protista',
      color: '#4C1F7A'
    },
    {
      title: 'Animalia',
      description: 'Eksplorasi materi mengenai Animalia',
      imageUrl: '/images/animalia.webp',
      link: './Animalia',
      color: '#219B9D'
    },

    {
      title: 'Test Pengetahuan',
      description: 'Uji sejauh mana kemampuan kamu setelah belajar materi diwebsite ini',
      imageUrl: '/images/quiz.png',
      link: './Quiz',
      color: '#78B3CE'
    }

  ];

  return (
    <div className="home-container">
      <div className="hero-section4">
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
            <p>Kuis  untuk menguji pemahaman</p>
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

      <div className="cta-section">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Siap Memulai Perjalanan Belajarmu?</h2>
            <p>Bergabunglah dengan ribuan siswa yang sudah merasakan kemudahan belajar biologi</p>
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
          

            <NavLink 
   to= 'https://youtu.be/8glI_X1XoBE?si=kQj0OoKjDFzyrRPR' 
  className="secondary-btn"
>
  Lihat Materi
  <i className="fas fa-play-circle"></i>
</NavLink>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

