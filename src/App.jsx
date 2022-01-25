/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
