import React from "react";
import './Virus.css';

export const Virus = () => {
  return (
    <div className="cards-wrapper">
      <div className="card-container">
        <img src="/images/Virus0.jpg" className="card-img" alt="Virus Sejarah" />
        <h1 className="card-title">Sejarah</h1>
        <p className="card-description"></p>
        <a href="" className="card-btn">Learn More</a>
      </div>

      <div className="card-container">
        <img src="/images/Virus1.jpeg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Struktur Virus</h1>
        <p className="card-description"></p>
        <a href="" className="card-btn">Learn More</a>
      </div>

      <div className="card-container">
        <img src="/images/Virus2.jpg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Bentuk Virus</h1>
        <p className="card-description">Cara Virus Menyebar</p>
        <a href="" className="card-btn">Learn More</a>
      </div>

      <div className="card-container">
        <img src="/images/Virus3.jpg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Replikasi Virus</h1>
        <p className="card-description"></p>
        <a href="" className="card-btn">Learn More</a>
      </div>

      <div className="card-container">
        <img src="/images/Virus4.jpeg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Peran dan Penyakit Virus</h1>
        <p className="card-description"></p>
        <a href="" className="card-btn">Learn More</a>
      </div>

      <div className="card-container">
        <img src="/images/Virus5.jpg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Pencegahan</h1>
        <p className="card-description"></p>
        <a href="" className="card-btn">Learn More</a>
      </div>

    </div>
  );
};

export default Virus;
