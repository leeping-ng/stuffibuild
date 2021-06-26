import React from 'react';
import AppBar from './components/AppBar';
import Hero from './components/Hero';
import Montage from './components/Montage';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Hero />
      <Montage />
      <Footer />
    </React.Fragment>

  );
}

export default App;
