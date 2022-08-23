import React from 'react';

import Title from './../Title';
import Main from './../News/Main';

import './../../assets/styles/news/news.css';

class News extends React.Component {
  render() {
    return (
      <div className="news">
        <Title title="News" />
        <Main />
      </div>
    );
  }
}

export default News;
