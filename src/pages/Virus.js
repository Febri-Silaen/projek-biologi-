import React from "react";
import { Link } from "react-router-dom";
import '../styles/Virus.css';

export const Virus = () => {
  return (
    <div className="cards-wrapper">
      <div className="card-container">
        <img src="/images/Virus0.jpg" className="card-img" alt="Virus Sejarah" />
        <h1 className="card-title">Sejarah</h1>
        <p className="card-description"></p>
        <Link to="/sejarah" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="/images/Virus1.jpeg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Struktur Virus</h1>
        <p className="card-description"></p>
        <Link to="/struktur" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="/images/Virus3.jpg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Replikasi Virus</h1>
        <p className="card-description"></p>
        <Link to="/replikasi" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="/images/Virus4.jpeg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Peran dan Penyakit Virus</h1>
        <p className="card-description"></p>
        <Link to="/peranvirus" className="card-btn">Learn More</Link>
      </div>

      <div className="card-container">
        <img src="/images/Virus5.jpg" className="card-img" alt="Virus Penyebaran" />
        <h1 className="card-title">Pencegahan</h1>
        <p className="card-description"></p>
        <Link to="/pencegahan" className="card-btn">Learn More</Link>
      </div>
    </div>
  );
};

export default Virus;