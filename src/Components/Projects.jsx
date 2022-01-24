import React from 'react';
import './styles/Projects.css';
import Card from './Card';

// Projects img
import shorteningImg from '../assets/img/projects/shortening.png';
import timeTrackingImg from '../assets/img/projects/timeTracking.png';
import splitterImg from '../assets/img/projects/splitter.png';

const projectsArray = [
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
  return (
    <section className="projects">
      <h2 className="h2">Projects</h2>
      <div className="projects-wrapper">
        <Card
          title={projectsArray[0].title}
          info={projectsArray[0].info}
          img={projectsArray[0].img}
        />
        <Card
          title={projectsArray[1].title}
          info={projectsArray[1].info}
          img={projectsArray[1].img}
        />
        <Card
          title={projectsArray[2].title}
          info={projectsArray[2].info}
          img={projectsArray[2].img}
        />
      </div>
    </section>
  );
}

export default Projects;
