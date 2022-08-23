import React from 'react';

import Title from './../Title';
import Main from './../Login/Main';

import './../../assets/styles/login/login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login">

        <Title title="Login" />
        <Main />
      </div>
    );
  }
}

export default Login;
