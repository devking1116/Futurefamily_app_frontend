import React from 'react';

import Title from './../Contact/Title';
import Mission from './../Contact/Mission';

import './../../assets/styles/contact/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Title />
        <Mission />
      </div>
    );
  }
}

export default Contact;
