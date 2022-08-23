import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import FreeSignupPart from './components/FreeSignupPart';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import EggFreezing from './components/EggFreezing';
import IVF from './components/IVF';
import Contact from './components/Contact';
import CreateAccount from './components/CreateAccount';
import GetStarted from './components/GetStarted';
import News from './components/News';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';

ReactDOM.render((
    <div>
      <Header />
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="home" component={Home} />
        <Route path="about-us" component={AboutUs} />
        <Route path="egg-freezing" component={EggFreezing} />
        <Route path="ivf" component={IVF} />
        <Route path="contact" component={Contact} />
        <Route path="create-account" component={CreateAccount} />
        <Route path="get-started" component={GetStarted} />
        <Route path="news" component={News} />
        <Route path="login" component={Login} />
      </Router>
      <FreeSignupPart />
      <Footer />
    </div>
  ),
  document.getElementById('root')
);
