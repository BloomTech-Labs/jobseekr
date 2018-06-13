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
import AddJob from '../../components/addjob';

class Jobs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lists: [
        { category: 'Wishlist', jobs: [] },
        { category: 'Applied', jobs: [] },
        { category: 'Phone', jobs: [] },
        { category: 'On Site', jobs: [] },
        { category: 'Offer', jobs: [] },
        { category: 'Rejected', jobs: [] },
        { category: 'Add List', jobs: [] },
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
                      <Panel.Title componentClass="h3">{list.category}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <AddJob />
                      {list.jobs}
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
