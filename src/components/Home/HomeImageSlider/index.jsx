import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, Modal, Button, ControlLabel, Checkbox } from 'react-bootstrap';

import ImageGallery from 'react-image-gallery';

import { SignupButton } from './../../AuthButtons';

import "react-image-gallery/styles/css/image-gallery.css";

import './../../../assets/styles/home/home-slider.css';

import slider1 from './../../../assets/images/iStock-623680490.jpg';
import slider2 from './../../../assets/images/iStock-486715676.jpg';
import slider3 from './../../../assets/images/iStock-491208056.jpg';
import slider4 from './../../../assets/images/iStock-522319544.jpg';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       smShow: false
    }
  };

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  clickSignup() {
    this.setState({ smShow: true });
    console.log('The link was clicked.');
  }

  render() {
    const images = [
      {
        original: slider1,
      },
      {
        original: slider2,
      },
      {
        original: slider3,
      },
      {
        original: slider4,
      }
    ];

    let smClose = () => this.setState({ smShow: false });

    return (
      <div className="home-slider">
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true} />
        <div className="signup-on-slider">
          <div className="container">
            <div className="title"><h1>Smart, modern <strong>fertility care</strong></h1></div>
            <div className="w-form wrapper">
              <Form name="email-form" id="email-form">
                <Row>
                  <Col xs={6}>
                    <Row>
                      <Col xs={6}>
                        <FormGroup>
                          <FormControl type="text" placeholder="Name" />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                        <FormGroup>
                          <FormControl type="email" placeholder="Email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <SignupButton text="Get Started" onClick={(e) => this.clickSignup(e)} />

                    <Modal show={this.state.smShow} bsSize="large" onHide={smClose}>
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <Col xs={6}>
                            <Row>
                              <Col xs={12}>
                                <h3>Your information</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <FormGroup>
                                  <ControlLabel>Name</ControlLabel>
                                  <FormControl type="text" />
                                </FormGroup>
                              </Col>
                              <Col xs={6}>
                                <FormGroup>
                                  <ControlLabel>Email</ControlLabel>
                                  <FormControl type="email" />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={6}>
                                <FormGroup>
                                  <ControlLabel>Telephone</ControlLabel>
                                  <FormControl type="text" />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={12}>
                                <FormGroup>
                                  <ControlLabel>Newsletter</ControlLabel>
                                  <Checkbox>Keep in touch with our newsletter</Checkbox>
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6}>
                            <Row>
                              <Col xs={12}>
                                <h3>How can we help you?</h3>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={12}>
                                <FormGroup>
                                  <ControlLabel>Leave us a message with more details</ControlLabel>
                                  <FormControl componentClass="textarea" />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Col>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={smClose}>Submit Details</Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
