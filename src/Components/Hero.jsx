import React from 'react';
import './styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <h1 className="hero-title">David Hurtado</h1>
        <h2 className="hero-sub">Frontend web developer</h2>
        <div className="icons">
          <a href="test">
            <i className="fab fa-github-square icon" />
          </a>
          <a href="test">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
