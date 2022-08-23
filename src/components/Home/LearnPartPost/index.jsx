import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import './../../../assets/styles/home/learn-part-post.css';

class LearnPartPost extends React.Component {
  render() {
    var title = this.props.title;
    var description = this.props.description;
    var xsOffset = this.props.xsOffset;

    return (
      <div className="grid">
        <Col xs={6} className="learn-part-post" xsOffset={xsOffset}>
          <div className="white-half-col">
            <div className="title">
              <h2 className="teal-title">{title}</h2>
            </div>
            <p>{description}</p>
            <Col className="cta-bottom">
              <a className="_w-arrow teal-link" href="#">Learn More <span className="small-arrow-icon">›</span></a>
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default LearnPartPost;
