import React from 'react';
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router';
import { SocialIcons } from 'react-social-icons';

import logo_footer from './../../assets/images/foot-logo.svg';

import './../../assets/styles/footer.css'

export default function(props) {
  var urls = [
    'https://www.facebook.com/',
    'http://twitter.com',
    'https://www.instagram.com/',
    'https://plus.google.com/'
  ];
  return (
    <footer>
      <Grid>
        <Row>
          <div className="footer-top">
            <Row>
              <Col xs={4}>
                <img src={logo_footer} alt="logo_footer" />
              </Col>
              <Col xs={8}>
                <Nav className="footer-links" pullRight>
                  <NavItem className="nav-link w-nav-link">About us</NavItem>
                  <NavItem className="nav-link w-nav-link">Egg Freezing</NavItem>
                  <NavItem className="nav-link w-nav-link">IVF</NavItem>
                  <NavItem className="nav-link w-nav-link">Contact</NavItem>
                </Nav>
              </Col>
            </Row>
          </div>
        </Row>
        <Row>
          <div className="footer-bottom">
            <Col xs={6} className="no-padding">
              <div className="copy-right">© 2017 All rights reserved.</div>
            </Col>
            <Col xs={6} className="no-padding">
              <div className="social-icons">
                <SocialIcons urls={urls} color="transparent" />
              </div>
            </Col>
          </div>
        </Row>
      </Grid>
    </footer>
  );
}
