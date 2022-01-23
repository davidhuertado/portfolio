import React from 'react';
import './styles/Skills.css';
import bootstrap from '../assets/img/bootstrap.svg';
import css from '../assets/img/css.svg';
import git from '../assets/img/git.svg';
import html from '../assets/img/html.svg';
import js from '../assets/img/js.svg';
import react from '../assets/img/react.svg';
import sass from '../assets/img/sass.svg';
import webpack from '../assets/img/webpack.svg';

function Skills() {
  return (
    <div className="skills">
      <h2 className="h2">Skills</h2>
      <div className="grid">
        <a
          className="child html-logo"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          <img src={html} alt="html" />
        </a>
        <a
          className="child css-logo"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          <img src={css} alt="css" />
        </a>
        <a className="child git-logo" href="https://git-scm.com/">
          <img src={git} alt="git" />
        </a>
        <a
          className="child js-logo"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <img src={js} alt="javascript" />
        </a>
        <a className="child react-logo" href="https://reactjs.org/">
          <img src={react} alt="react" />
        </a>
        <a className="child sass-logo" href="https://sass-lang.com/">
          <img src={sass} alt="sass" />
        </a>
        <a className="child bootsrap-logo" href="https://getbootstrap.com/">
          <img src={bootstrap} alt="bootstrap" />
        </a>
        <a className="child webpack-logo" href="https://webpack.js.org/">
          <img src={webpack} alt="webpack" />
        </a>
      </div>
    </div>
  );
}

export default Skills;
