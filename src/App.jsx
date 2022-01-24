/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
