import React from 'react';
import { Col, Row, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

import slider1 from './../../../assets/images/iStock-486715676.jpg';

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid main no-padding" style={{backgroundImage: 'url('+slider1+')'}}>
        <div className="overlay"></div>
        <Col className="set-password" xs={10} xsOffset={1}>
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
                <Col xs={6}>
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
                <Col xs={6}>
                  <FormGroup>
                    <ControlLabel>Leave us a message with more details</ControlLabel>
                    <FormControl componentClass="textarea" />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </form>
        </Col>
      </div>
    );
  }
}

export default Main;
