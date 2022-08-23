import React from 'react';
import { Col } from 'react-bootstrap';

class Pillar extends React.Component {
  render() {
    return (
      <Col md={4} xs={12}>
        <div className="center-block">
          <div className="bm-x---m">
            <div className="number">{this.props.number}</div>
          </div>
          <h5 className="caps">{this.props.cap}</h5>
          <p className="small-text">{this.props.description}</p>
        </div>
      </Col>
    );
  }
}

export default Pillar;
