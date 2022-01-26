import React from 'react';
import './styles/Card.css';

// eslint-disable-next-line react/prop-types
function Card({ title, info, img }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={img} className="card-img" alt={title} />
      </div>
      <div className="card-text">
        <h3 className="title">{title}</h3>
        <div className="info-container">
          <p className="info">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
