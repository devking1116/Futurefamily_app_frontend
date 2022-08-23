import React from 'react';
import { Col } from 'react-bootstrap';

import ServiceContent from './../ServiceContent';

import './../../../assets/styles/home/services.css'

import slider1 from './../../../assets/images/58c7de6f6cb5a14e07b4dd9f_services-1@2x.png';
import slider2 from './../../../assets/images/58c7de996cb5a14e07b4dda9_services-2@2x.png';

class Services extends React.Component {
  render() {
    var content = 'We\'re revolutionizing fertility care with affordable packages that replace the big upfront cost of treatment with a simple monthly fee - and provide on -demand medical support and personalized care. It’s the smart, modern approach to fertility care.';
    var serviceContents = [
      {
        title: 'Egg Freezing ',
        backgroundImage: slider1,
        description: 'Take control of your fertility. The best time to freeze your eggs is right now. Find out how in five easy steps.'
      }, {
        title: 'IVF ',
        backgroundImage: slider2,
        description: 'Don\'t wait to get the answers you need & the care you deserve. Discover how our in vitro service is different.'
      }
    ];
    return (
      <div className="services section">
        <div className="container">
          <div className="section-title-holder">
            <div className="bm-x---s">
              <h2>Our Services</h2>
            </div>
            <p>{content}</p>
          </div>
          <div className="grid">
            {serviceContents.map((serviceContent, key) => (
                <Col xs={6} key={key}>
                  <ServiceContent
                    backgroundImage={serviceContent.backgroundImage}
                    title={serviceContent.title}
                    description={serviceContent.description}
                    overlayColor={'#3CB9B9'} />
                </Col>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
