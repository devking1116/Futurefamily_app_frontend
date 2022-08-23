import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LoginButton, SignupButton } from './../AuthButtons';

import logo_desktop from './../../assets/images/logo.svg';

import './../../assets/styles/header.css'

export default function(props) {
  return (
    <header>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="logo w-nav-brand" href="/"><img src={logo_desktop} alt="logo_desktop" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <div className="nav-holder w-clearfix">
          <SignupButton text="Get Started" href="get-started" className="nav-link orange" />
          <Nav pullRight>
            <NavItem className="nav-link w-nav-link" href="about-us">About us</NavItem>
            <NavItem className="nav-link w-nav-link" href="egg-freezing">Egg Freezing</NavItem>
            <NavItem className="nav-link w-nav-link" href="ivf">IVF</NavItem>
            <NavItem className="nav-link w-nav-link" href="contact">Contact</NavItem>
            <LoginButton className="nav-link teal" text="Login" href="login" />
          </Nav>
        </div>
      </Navbar>
    </header>
  );
}
