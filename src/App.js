import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc',
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'x-api-key': process.env.REACT_APP_APIKEY,
          },
        },
      );
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
