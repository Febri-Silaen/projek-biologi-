import React from 'react';
import '../styles/MaterialCard.css';

const MaterialCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="material-card">
      <div className="material-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="material-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="learn-more-btn">Pelajari Selanjutnya</a>
      </div>
    </div>
  );
};

export default MaterialCard;