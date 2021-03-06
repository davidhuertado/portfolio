import React from 'react';
import './styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <h1 className="hero-title">David Hurtado</h1>
        <h2 className="h2">Frontend web developer</h2>
        <div className="icons">
          <a href="test">
            <i className="fab fa-github-square icon" />
          </a>
          <a href="test">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <a href="#Skills">
          <div className="arrow-container">
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div className="arrow" />
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow" />
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow" />
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
