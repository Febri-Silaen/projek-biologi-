import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
 
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Terima kasih telah berlangganan newsletter kami!');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Sibisuk Biologi</h3>
          <p className="footer-description">
            Platform pembelajaran biologi interaktif untuk siswa kelas 10. 
            Pelajari biologi dengan cara yang menyenangkan dan mudah dipahami.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Halaman</h4>
          <ul className="footer-links">
            <li><Link to="/ruang-lingkup">Ruang Lingkup</Link></li>
            <li><Link to="/keanekaragaman">Keanekaragaman</Link></li>
            <li><Link to="/virus">Virus</Link></li>
            <li><Link to="/protista">Protista</Link></li>
            <li><Link to="/fungi">Fungi</Link></li>
            <li><Link to="/plantae">Plantae</Link></li>
            <li><Link to="/animalia">Animalia</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Materi Terpopuler</h4>
          <ul className="footer-links">
            <li><Link to="/virus">Pengenalan Virus</Link></li>
            <li><Link to="/keanekaragaman">Keanekaragaman Indonesia</Link></li>
            <li><Link to="/plantae">Kingdom Plantae</Link></li>
            <li><Link to="/animalia">Kingdom Animalia</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Berita</h4>
          <p>Daftar dan dapatkan update materi dan tips belajar terbaru</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="langganan">
            <button type="submit">Daftar</button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Sibisuk. Marbiologi.</p>
          <div className="footer-bottom-links">
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
