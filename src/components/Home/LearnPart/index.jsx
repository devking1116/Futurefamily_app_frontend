import React from 'react';
import { Grid, Col } from 'react-bootstrap';

import './../../../assets/styles/home/learn-part.css';

import LearnPartPost from './../LearnPartPost';

class LearnPart extends React.Component {
  render() {
    var style = {backgroundImage: 'url(' + this.props.backgroundImage + ')'};
    var xsOffset = this.props.xsOffset;
    var postContent = {
      title: this.props.postContent.title,
      description: this.props.postContent.description
    };

    return (
      <div className="learn-part section segment-right" style={style}>
        <div className="container">
          <LearnPartPost title={postContent.title} description={postContent.description} xsOffset={xsOffset} />
        </div>
      </div>
    );
  }
}

export default LearnPart;
