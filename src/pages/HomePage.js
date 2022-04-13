import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Browse from '../components/Browse';
import Arrived from '../components/Arrived';
import Clients from '../components/Clients';
import AsideMenu from '../components/AsideMenu';
import Footer from '../components/Footer';

export default function HomePage({ cart, items }) {
  return (
    <>
      <Header mode="light" cart={cart} />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu currentPage="home" />
      <Footer />
    </>
  );
}
