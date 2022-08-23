import React from 'react';

import Title from './../Title';
import Mission from './../GetStarted/Mission';
import Main from './../GetStarted/Main';

import './../../assets/styles/get-started/get-started.css';

class GetStarted extends React.Component {
  render() {
    return (
      <div className="get-started">
        <Title title="Get Started" />
        <Mission />
        <Main />
      </div>
    );
  }
}

export default GetStarted;
