import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav role="navigation" className="navbar">
        <div className="brand">
          <h1>David Hurtado</h1>
        </div>
        <div className="right-nav">
          <ul className="hide-mobile lg-nav">
            <a href="fakeadress">
              <li>About me</li>
            </a>

            <a href="fakeadress">
              <li>Skills</li>
            </a>
            <a href="fakeadress" target="_blank">
              <li>Projects</li>
            </a>
          </ul>
          <div className="hide-lg" id="menuToggle">
            <input type="checkbox" />

            <span />
            <span />
            <span />

            <ul id="menu">
              <a href="fakeadress">
                <li>About me</li>
              </a>

              <a href="fakeadress">
                <li>Skills</li>
              </a>
              <a href="fakeadress" target="_blank">
                <li>Projects</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
