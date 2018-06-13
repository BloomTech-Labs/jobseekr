import React, { Component } from 'react';
import {
  Well,
  Grid,
  Row,
  Col,
  PageHeader,
  Panel,
} from 'react-bootstrap';
import Header from '../../components/header';

class Jobs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lists: [
        { title: 'Wishlist', content: 'insert jobs here' },
        { title: 'Applied', content: 'insert jobs here' },
        { title: 'Phone', content: 'insert jobs here' },
        { title: 'On Site', content: 'insert jobs here' },
        { title: 'Offer', content: 'insert jobs here' },
        { title: 'Rejected', content: 'insert jobs here' },
        { title: 'Add List', content: 'insert jobs here' },
      ],
    };
  }

  render() {
    return (
      <div className="parent">
        <Header />
        <Grid className="board__container">
          <Well>
            <PageHeader className="board__header">
              Jobs List
            </PageHeader>
            <Row className="board">
              {this.state.lists.map(list => (
                <Col key="" xs={6} md={4}>
                  <Panel className="list">
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">{list.title}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      {list.content}
                    </Panel.Body>
                  </Panel>
                </Col>
              ))}
            </Row>
          </Well>
        </Grid>
      </div>
    );
  }
}

export default Jobs;
