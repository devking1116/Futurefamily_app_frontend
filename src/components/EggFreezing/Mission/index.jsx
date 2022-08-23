import React from 'react';

import slider1 from './../../../assets/images/iStock-486715676.jpg';

class Mission extends React.Component {
  render() {
    var mission = 'Preserve your fertility & live freely';
    return (
      <div className="container-fluid mission no-padding" style={{backgroundImage: 'url('+slider1+')'}}>
        <div className="overlay"></div>
        <div className="container">
          <p>{mission}</p>
        </div>
      </div>
    );
  }
}

export default Mission;
