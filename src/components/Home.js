import React from 'react';

import AppBar from './AppBar';
import Hero from './Hero';
import DesignPhilosophy from './/DesignPhilosophy';
import Montage from './Montage';
import About from './About';
import Footer from './Footer';


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