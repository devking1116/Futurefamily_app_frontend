import React from 'react';
import { Col } from 'react-bootstrap';

class Post extends React.Component {
  render() {
    var style = {backgroundImage: 'url(' + this.props.postImage + ')'};
    var linkText = this.props.linkText;
    var title = this.props.title;

    return (
      <a className="jump-off-holder w-inline-block" href="#">
        <div className="jump-off-image" style={style}></div>
        <div className="jump-off-content">
          <div className="jump-off-title"><h5 className="caps">{linkText}</h5></div>
          <h3>{title}</h3>
        </div>
      </a>
    );
  }
}

export default Post;
