import React from 'react';

import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import Montage from '../components/Montage';
import About from '../components/About';
import Footer from '../components/Footer';


function Home() {

  return (
    <React.Fragment>
      <AppBar />
      <Hero />
      <About />
      <Montage />
      <Footer />
    </React.Fragment>

  );
}

export default Home;