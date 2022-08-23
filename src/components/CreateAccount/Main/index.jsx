import React from 'react';
import { Col, Row, FormGroup, FormControl, Button } from 'react-bootstrap';

import slider1 from './../../../assets/images/iStock-486715676.jpg';

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid main no-padding" style={{backgroundImage: 'url('+slider1+')'}}>
        <div className="overlay"></div>
        <Col className="set-password" xs={4} xsOffset={4}>
          <form>
            <Col xs={10} xsOffset={1}>
              <Row>
                <Col xs={8}>
                  <h3>Set your password</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <p>Thanks for confirming your email, enter a password to create an account</p>
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <FormGroup>
                    <FormControl type="email" placeholder="Email" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <FormGroup>
                    <FormControl type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <FormGroup>
                    <Button bsStyle="info">Create Password</Button>
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
