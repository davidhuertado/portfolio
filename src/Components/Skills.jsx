import React from 'react';
import './styles/Skills.css';
import bootstrap from '../assets/img/bootstrap-white.svg';
import css from '../assets/img/css-white.svg';
import git from '../assets/img/git-white.svg';
import html from '../assets/img/html-white.svg';
import js from '../assets/img/js-white.svg';
import react from '../assets/img/react-white.svg';
import sass from '../assets/img/sass-white.svg';
import webpack from '../assets/img/webpack-white.svg';
import linux from '../assets/img/linux-white.svg';

const icons = [
  {
    src: html,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    className: 'html-logo',
  },
  {
    src: css,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    className: 'css-logo',
  },
  {
    src: js,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    className: 'js-logo',
  },
  {
    src: bootstrap,
    href: 'https://getbootstrap.com/',
    className: 'bootstrap-logo',
  },
  {
    src: react,
    href: 'https://reactjs.org/',
    className: 'react-logo',
  },
  {
    src: git,
    href: 'https://git-scm.com/',
    className: 'git-logo',
  },
  {
    src: linux,
    href: 'https://en.wikipedia.org/wiki/Linux',
    className: 'linux-logo',
  },
  {
    src: webpack,
    href: 'https://webpack.js.org/',
    className: 'webpack-logo',
  },
  {
    src: sass,
    href: 'https://sass-lang.com/',
    className: 'sass-logo',
  },
];

function Skills() {
  const renderedIcons = icons.map(({ href, src, className }) => (
    <a href={href} className={`child ${className}`} key={src}>
      <img src={src} alt={src} />
    </a>
  ));

  return (
    <section id="Skills" className="skills">
      <h2 className="h2">Skills</h2>
      <div className="grid">
        {renderedIcons}
        {/* <a
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
        <a
          className="child js-logo"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <img src={js} alt="javascript" />
        </a>
        <a className="child git-logo" href="https://git-scm.com/">
          <img src={git} alt="git" />
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
        </a> */}
      </div>
    </section>
  );
}

export default Skills;
