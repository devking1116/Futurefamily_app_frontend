import React from 'react';

class Title extends React.Component {
  render() {
    var title = this.props.title;
    return (
      <div className="container-fluid title">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

export default Title;
