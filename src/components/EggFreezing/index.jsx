import React from 'react';

import Title from './../EggFreezing/Title';
import Mission from './../EggFreezing/Mission';

import './../../assets/styles/egg-freezing/egg-freezing.css';

class EggFreezing extends React.Component {
  render() {
    return (
      <div className="egg-freezing">
        <Title />
        <Mission />
      </div>
    );
  }
}

export default EggFreezing;
