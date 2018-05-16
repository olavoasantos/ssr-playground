import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './components/Pages/Home';
import Prices from './components/Pages/Prices';
import AboutUs from './components/Pages/AboutUs';
import Contact from './components/Pages/Contact';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/precos" component={Prices} />
    <Route exact path="/contato" component={Contact} />
    <Route exact path="/quem-somos" component={AboutUs} />
  </div>
)
