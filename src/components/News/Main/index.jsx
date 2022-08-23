import React from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import Newsletter from './../Newsletter';

import slider1 from './../../../assets/images/iStock-486715676.jpg';

class Main extends React.Component {
  render() {
    var newsletters = [
      {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }, {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }, {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }, {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }, {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }, {
        img: 'url('+slider1+')',
        title: 'title',
        description: 'description',
        favCnt: 1,
        commentCnt: 1
      }
    ];
    return (
      <div className="container-fluid main no-padding">
        <Grid>
          <Row>
            {newsletters.map((newsletter, key) => (
              <Col xs={4} key={key}>
                <Newsletter img={newsletter.img}
                            title={newsletter.title}
                            description={newsletter.description}
                            favCnt={newsletter.favCnt}
                            commentCnt={newsletter.commentCnt} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="center-block">
              <Button className="center-block">Learn more</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
