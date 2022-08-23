import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Post from './../Post';

import bkimage1 from './../../../assets/images/58c7e7486cb5a14e07b4e01a_JO1@2x.png';
import bkimage2 from './../../../assets/images/58c7e7481ea0b41e61f3d7a5_JO2@2x.png';
import bkimage3 from './../../../assets/images/58c7e7489bb812e84c0e312c_JO3@2x.png';

class PostPart extends React.Component {
  render() {
    var style = {backgroundImage: 'url(' + this.props.backgroundImage + ')'};
    var title = 'Life is complicated, fertility care shouldn\'t be';
    var description = 'Our program is designed for simplicity. From selecting your doctor, to scheduling your appointments, and tracking your medications - we do it all. When possible, we arrange for medical professionals to come to you, and we enable you to manage your treatment from your smart phone.';

    var postContents = [
      {
        title: 'Call or Email Us - We\'d love to hear from you ›',
        linkText: 'contact us',
        postImage: bkimage1
      }, {
        title: 'Thanks to technology, women today have more and more control over their fertility ›',
        linkText: 'learn more',
        postImage: bkimage2
      }, {
        title: 'We believe in giving women freedom. The freedom to choose if they want to have kids ›',
        linkText: 'about us',
        postImage: bkimage3
      }
    ];

    return (
      <div className="jump-off section" style={style}>
        <div className="container">
          <div className="grid">
            <Col xs={12} md={7}>
              <div className="title"><h2>{title}</h2></div>
              <div className="description"><p>{description}</p></div>
            </Col>
          </div>
          <div className="grid">
            {postContents.map((post, key) => (
              <Col xs={4} key={key}>
                <Post postImage={post.postImage}
                      title={post.title}
                      linkText={post.linkText} />
              </Col>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PostPart;
