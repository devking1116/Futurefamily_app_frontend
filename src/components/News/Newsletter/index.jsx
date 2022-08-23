import React from 'react';

class Newsletter extends React.Component {
  render() {
    var style = {backgroundImage: this.props.img};
    var title = this.props.title;
    var description = this.props.description;
    var favCnt = this.props.favCnt;
    var commentCnt = this.props.commentCnt;

    return (
      <div className="newsletter">
        <div className="news-image" style={style}></div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Newsletter;
