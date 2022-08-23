import React from 'react';

import './../../assets/styles/auth-buttons.css'

class LoginButton extends React.Component {
  render() {
    var text = 'Login';
    var href = this.props.href;
    var className = "btn-login btn-auth";
    if (!!this.props.className) className += " " + this.props.className;
    if (!!this.props.text) text = this.props.text;
    return (
      <a role="button" className={className} href={href}>{text}</a>
    );
  }
}

class SignupButton extends React.Component {
  

  render() {
    var text = 'Signup';
    var href = this.props.href;
    var className = "btn-signup btn-auth";
    if (!!this.props.className) className += " " + this.props.className;
    if (!!this.props.text) text = this.props.text;
    return (
      <a role="button" className={className} href={href} onClick={this.props.onClick}>{text}</a>
    );
  }
}

module.exports = {
  LoginButton: LoginButton,
  SignupButton: SignupButton
}
