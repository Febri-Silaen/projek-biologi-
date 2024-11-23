import React, { useEffect, useRef } from 'react';
import './RuangLingkup.css';

const RuangLingkup = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const cells = animationRef.current.querySelectorAll('.cell');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    cells.forEach((cell) => {
      observer.observe(cell);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="keanekaragaman">
      <div className="hero-section">
        <div className="container">
          <h1 className="display-4 text-white">Keanekaragaman Hayati</h1>
          <p className="lead text-white">Memahami Kompleksitas Kehidupan di Bumi</p>
         
        </div>
      </div>
      <div className="ruang-lingkup-container">
        <div className="ruang-lingkup-header">
          <h1>Dunia Biologi yang Memukau</h1>
          <p>Jelajahi keindahan dan kekayaan ilmu tentang kehidupan di Bumi.</p>
        </div>
        <div className="ruang-lingkup-content">
          <div className="ruang-lingkup-text">
            <h2>Pesona Dunia Biologi</h2>
            <p>
              Biologi adalah studi ilmiah tentang organisme hidup, struktur, fungsi, pertumbuhan, evolusi, penyebaran, dan taksonominya. Disiplin ini mencakup berbagai cabang yang beragam, masing-masing menawarkan wawasan unik tentang kompleksitas dan keindahan kehidupan. Dari mikroorganisme terkecil hingga ekosistem terbesar, bidang biologi membuka mata kita akan keajaiban alam.
            </p>
            <h2>Menjelajahi Cabang-Cabang Biologi</h2>
            <ul>
              <li>
                <h3>Botani</h3>
                <p>Mengungkap misteri dan keindahan kerajaan tumbuhan, dari lumut hingga pohon raksasa.</p>
              </li>
              <li>
                <h3>Zoologi</h3>
                <p>Menjelajahi keragaman memukau dunia hewan, dari serangga terkecil hingga mamalia terbesar.</p>
              </li>
              <li>
                <h3>Mikrobiologi</h3>
                <p>Menyelami alam mikroorganisme yang tersembunyi, mengungkap peran vitalnya dalam ekosistem dan kehidupan.</p>
              </li>
              <li>
                <h3>Fisiologi</h3>
                <p>Mengurai proses rumit yang menopang kehidupan, dari tingkat sel hingga sistem kompleks dalam tubuh.</p>
              </li>
              <li>
                <h3>Genetika</h3>
                <p>Memecahkan kode kehidupan, mengungkap rahasia pewarisan sifat dan mekanisme evolusi.</p>
              </li>
              <li>
                <h3>Ekologi</h3>
                <p>Mempelajari hubungan dinamis antara organisme hidup dan lingkungannya, mengungkap keterkaitan segala kehidupan di Bumi.</p>
              </li>
            </ul>
          </div>
          <div className="ruang-lingkup-animation" ref={animationRef}>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-leaf"></i>
                <h3>Botani</h3>
                <p>Menjelajahi keindahan kerajaan tumbuhan</p>
              </div>
            </div>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-paw"></i>
                <h3>Zoologi</h3>
                <p>Mengungkap keragaman dunia hewan</p>
              </div>
            </div>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-microscope"></i>
                <h3>Mikrobiologi</h3>
                <p>Menyelami dunia mikroorganisme yang tersembunyi</p>
              </div>
            </div>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-heart-pulse"></i>
                <h3>Fisiologi</h3>
                <p>Menelusuri proses-proses kehidupan</p>
              </div>
            </div>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-dna"></i>
                <h3>Genetika</h3>
                <p>Membongkar rahasia kode kehidupan</p>
              </div>
            </div>
            <div className="cell">
              <div className="cell-content">
                <i className="fas fa-globe-asia"></i>
                <h3>Ekologi</h3>
                <p>Menjelajahi keterkaitan segala kehidupan di Bumi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ruang-lingkup-footer">
          <h2>Bergabunglah dalam Petualangan Ilmu Biologi</h2>
          <p>
            Bidang biologi menawarkan kesempatan tak terbatas untuk bereksplorasi dan memahami keajaiban alam. Dari proses sel yang rumit, hingga perilaku hewan yang memukau, serta keseimbangan ekosistem yang halus, selalu ada lebih banyak untuk ditemukan dan dipelajari. Ayo bersama-sama menyelami lebih dalam rahasia-rahasia kehidupan dan mengungkap wawasan yang membuka mata kita akan dunia yang begitu luas dan menakjubkan.
          </p>
          <a href="#" className="learn-more-btn">
            Jelajahi Biologi
          </a>
        </div>
      </div>
    </div>
  );
};

export default RuangLingkup;