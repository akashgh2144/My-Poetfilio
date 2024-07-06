import React from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Header from '../layouts/Header';
import About from '../components/About';



const Home = () => {
  return (
    <div>
      <Header />
      <About/>
      <Contact />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
