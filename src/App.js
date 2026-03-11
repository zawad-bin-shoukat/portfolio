import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Languages />
        <Certificates />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
