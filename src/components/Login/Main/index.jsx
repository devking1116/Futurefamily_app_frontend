import React from 'react';
import { Col, Row, FormGroup, FormControl } from 'react-bootstrap';

import { LoginButton, SignupButton } from './../../AuthButtons';

class Main extends React.Component {
  render() {
    var mission = 'I\'m Already Registered';
    return (
      <div className="container-fluid main no-padding">
        <Col xs={10} xsOffset={1} className="no-padding">
          <Col xs={6} className="no-padding">
            <div className="container-fluid left-panel panel">
              <h3>Sign up</h3>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massajjusto sit amet risus.</p>
              <SignupButton text="Get Started" href="#" />
            </div>
          </Col>
          <Col xs={6} className="no-padding">
            <div className="container-fluid right-panel panel">
              <h3>{mission}</h3>
              <p>Please login to your account</p>
              <Row>
                <Col xs={6}>
                  <FormGroup>
                    <FormControl type="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Password" />
                  </FormGroup>
                </Col>
              </Row>
              <LoginButton text="Login" href="#" />
            </div>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Main;
