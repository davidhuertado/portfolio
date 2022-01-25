import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="text">
        <i className="far fa-copyright" /> 2022 David Hurtado
      </p>
      <div className="icons">
        <a href="test">
          <i className="fab fa-github-square icon" aria-hidden="true" />
        </a>
        <a href="test">
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
