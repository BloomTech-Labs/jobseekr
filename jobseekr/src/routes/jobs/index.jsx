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
import AddList from '../../components/addlist';

class Jobs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lists: [
        { id: 1, category: 'Wishlist', jobs: [] },
        { id: 2, category: 'Applied', jobs: [] },
        { id: 3, category: 'Phone', jobs: [] },
        { id: 4, category: 'On Site', jobs: [] },
        { id: 5, category: 'Offer', jobs: [] },
        { id: 6, category: 'Rejected', jobs: [] },
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
                <Col key={list.id} xs={6} md={4}>
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
            <Row>
              <div className="addlist__btn" >
                <AddList />
              </div>
            </Row>
          </Well>
        </Grid>
      </div>
    );
  }
}

export default Jobs;
