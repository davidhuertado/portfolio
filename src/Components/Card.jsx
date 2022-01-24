import React from 'react';
import './styles/Card.css';

// eslint-disable-next-line react/prop-types
function Card({ title, info, img }) {
  return (
    <div className="card">
      <img src={img} className="card-img" alt={title} />
      <div className="card-text">
        <h3 className="title">{title}</h3>
        <p className="info">{info}</p>
      </div>
    </div>
  );
}

export default Card;
