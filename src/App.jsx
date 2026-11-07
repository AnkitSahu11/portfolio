import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Connect from './sections/Connect';

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Sidebar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} go={go} />
      <main className="main-content">
        <Hero go={go} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Connect />
        <Footer go={go} />
      </main>
    </div>
  );
}
