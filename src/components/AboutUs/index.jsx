import React from 'react';
import { Col } from 'react-bootstrap';

import Pillar from './Pillar';

import './../../assets/styles/about-us/about-us.css';

import bkimage1 from '../../assets/images/58c7efdefb3921d43000436b_Sub-Image@2x.jpg';
import bkimage2 from '../../assets/images/58c7f2c06de9460f6156afb2_BG-3-Col@2x.jpg';

class AboutUs extends React.Component {
  render() {
    var pillars = [
      {
        number: 1,
        cap: 'PERSONAL',
        description: 'We provide upfront answers, transparency, and 24/7 access to our care team. Simply text, call, or email anytime. Personal care that starts with your own nurse concierge.'
      }, {
        number: 2,
        cap: 'AFFORDABLE',
        description: 'We offer packages that work for everyone, including our $0 down egg freezing and IVF.'
      }, {
        number: 3,
        cap: 'WORLD CLASS',
        description: 'We bring together outstanding doctors and technology.'
      }
    ];
    return (
      <div className="about-us">
        <div className="sub-title">
          <div className="container">
            <div className="grid">
              <Col xs={12} md={12}>
                <h1 className="teal-title">About</h1>
              </Col>
            </div>
          </div>
        </div>
        <div className="sub-title-lower" style={{backgroundImage: 'url(' + bkimage1 + ')'}}>
          <div className="container">
            <div className="grid">
              <Col xs={12} md={7}>
                <h2 className="white-text">Our mission is to provide women and couples personal, affordable, world class fertility care.</h2>
              </Col>
            </div>
          </div>
        </div>
        <div className="_3-col section" style={{backgroundImage: 'url(' + bkimage2 + ')'}}>
          <div className="container">
            <div className="section-title-holder">
              <h2>Our service is revolutionizing fertility care by focusing on the three pillars of modern healthcare.</h2>
            </div>
            <div className="_3-col-parent">
              <div className="grid no-margin-left">
                {pillars.map((pillar, key) => (<Pillar key={key} number={pillar.number} cap={pillar.cap} description={pillar.description} />))}
              </div>
              <div className="mid-line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
