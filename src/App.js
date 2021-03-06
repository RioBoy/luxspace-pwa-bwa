import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './pages/Splash';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Offline from './components/Offline';

import useOfflineStatus from './helpers/hooks/useOfflineStatus';

function App({ cart }) {
  const [items, setItems] = useState([]);
  const [offlineStatus] = useOfflineStatus();
  const [isLoading, setIsLoading] = useState(true);

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

      const script = document.createElement('script');
      script.src = '/carousel.js';
      script.async = false;
      document.body.appendChild(script);
    })();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Splash />
      ) : (
        <>
          {offlineStatus && <Offline />}
          <HomePage cart={cart} items={items} />
        </>
      )}
    </>
  );
}

export default function Routes() {
  const cachedCart = window.localStorage.getItem('cart');
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    const currentIndex = cart.length;
    const newCart = [...cart, { id: currentIndex + 1, item }];
    setCart(newCart);
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function handleRemoveCartItem(event, id) {
    const revisedCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(revisedCart);
    window.localStorage.setItem('cart', JSON.stringify(revisedCart));
  }

  useEffect(() => {
    console.info('useEffect for localStorage');
    if (cachedCart !== null) {
      setCart(JSON.parse(cachedCart));
    }
  }, [cachedCart]);

  return (
    <Router>
      <Route path="/" exact>
        <App cart={cart} />
      </Route>
      <Route path="/profile" exact>
        <Profile cart={cart} />
      </Route>
      <Route path="/details/:id">
        <Details handleAddToCart={handleAddToCart} cart={cart} />
      </Route>
      <Route path="/cart">
        <Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem} />
      </Route>
    </Router>
  );
}
