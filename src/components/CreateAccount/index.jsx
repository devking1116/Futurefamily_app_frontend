import React from 'react';

import Title from './../Title';
import Main from './../CreateAccount/Main';

import './../../assets/styles/create-account/create-account.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="create-account">
        <Title title="Create Account" />
        <Main />
      </div>
    );
  }
}

export default Contact;
