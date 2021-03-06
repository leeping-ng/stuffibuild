import React from 'react';

import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import DesignPhilosophy from '../components/DesignPhilosophy';
import Montage from '../components/Montage';
import About from '../components/About';
import Footer from '../components/Footer';


function Home() {

  return (
    <React.Fragment>
      <AppBar />
      <Hero />
      <DesignPhilosophy />
      <Montage />
      <About />
      <Footer />
    </React.Fragment>

  );
}

export default Home;