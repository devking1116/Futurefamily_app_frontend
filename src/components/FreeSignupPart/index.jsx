import React from 'react';

import { SignupButton } from './../AuthButtons';

import './../../assets/styles/free-signup-part.css';

class FreeSignupPart extends React.Component {
  render() {
    return (
      <div className="container-fluid free-signup-part">
        <div className="cta-flex">
          <h2>You can sign up for <strong>free</strong></h2>
          <SignupButton text="Get Started" className="nav-link orange" href="#" />
        </div>
      </div>
    );
  }
}

export default FreeSignupPart;
