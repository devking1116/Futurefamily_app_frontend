import React from 'react';

class ServiceContent extends React.Component {
  render() {
    var styles = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
    };
    var title = this.props.title;
    var description = this.props.description;
    return (
      <div className="services-half-col w-inline-block" style={styles}>
        <h2 className="services-title">{title}<span className="arrow-right-icon">›</span></h2>
        <div className="services-text-holder">
          <p className="white-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default ServiceContent;
