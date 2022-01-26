import React from 'react';
import './styles/Projects.css';
import Card from './Card';

// Projects img
import shorteningImg from '../assets/img/projects/shortening.png';
import timeTrackingImg from '../assets/img/projects/timeTracking.png';
import splitterImg from '../assets/img/projects/splitter.png';

const projects = [
  {
    title: 'Shortly',
    info: 'Landing page of an app that allows to shortening URL. Made with React Hooks and sessionStorage. REST API',
    img: shorteningImg,
    url: 'https://focused-murdock-542622.netlify.app/',
  },
  {
    title: 'Time Tracking Dashboard',
    info: 'Tracking dashboard made with React. Use of Class components and states',
    img: timeTrackingImg,
    url: 'https://distracted-archimedes-a76d3e.netlify.app/',
  },
  {
    title: 'Splitter',
    info: 'Tip calculator made with React Class components.',
    img: splitterImg,
    url: 'https://quirky-borg-21f2ba.netlify.app/',
  },
];

function Projects() {
  const renderedProjects = projects.map((project) => (
    <Card
      title={project.title}
      info={project.info}
      img={project.img}
      id={project.title}
    />
  ));
  return (
    <section className="projects">
      <h2 className="h2">Projects</h2>
      <div className="projects-wrapper">{renderedProjects}</div>
    </section>
  );
}

export default Projects;
