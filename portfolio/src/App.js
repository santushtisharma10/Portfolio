import './App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from "./components/Work"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
