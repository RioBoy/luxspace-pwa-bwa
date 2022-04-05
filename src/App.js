import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
