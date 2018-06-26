import React, { Component } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { Well, Grid, Row, Col, PageHeader, Panel } from 'react-bootstrap';
import { Header, AddJob, AddList, EditJob } from '../components/AllComponents';
import ROOT_URL from './config';

class Jobs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lists: [
        { id: 1, status: 'Want to Apply', jobs: [{ "_id": "5b2a93b6057c4a1a5ea3ed1d",
        "status": "Want to Apply",
        "companyName": "Google",
        "position": "Jr. Developer",
        "createdAt": {
            "$date": "2018-06-20T17:49:42.322Z"
        },
        "updatedAt": {
          "$date": "2018-06-20T17:49:42.322Z",
        },
        "__v": 0}] },
        { id: 2, status: 'Submitted Job App', jobs: [{ "_id": "5b2a93b6057c4a1a5ea3ed1d",
        "status": "Want to Apply",
        "companyName": "Google",
        "position": "Jr. Developer",
        "createdAt": {
            "$date": "2018-06-20T17:49:42.322Z"
        },
        "updatedAt": "2018-06-20T17:49:42.322Z",
        "__v": 0}] },
        { id: 3, status: 'Received Response', jobs: [{ "_id": "5b2a93b6057c4a1a5ea3ed1d",
        "status": "Want to Apply",
        "companyName": "Google",
        "position": "Jr. Developer",
        "createdAt": {
            "$date": "2018-06-20T17:49:42.322Z"
        },
        "updatedAt": "2018-06-20T17:49:42.322Z",
        "__v": 0}] },
        { id: 4, status: 'Phone Interview', jobs: [] },
        { id: 5, status: 'On Site Interview', jobs: [] },
        { id: 6, status: 'Technical Interview', jobs: [] },
        { id: 7, status: 'Offer', jobs: [] },
        { id: 8, status: 'Rejected', jobs: [] },
      ],
    };
  }

  getAllJobs = e => {
    const token = localStorage.getItem('token');
    axios
    .get(`${ROOT_URL}/jobs`, { token })
    .then(jobs => {
      const newList = this.state.list;
      jobs.forEach(job => {
        for (let i = 0; i < newList.length; i++) {
          if (newList[i].status === job.status) {
            newList.jobs.push(job);
            break;
          }
        }
      });
      this.setState({ list: newList });
    })
    .catch(() => {
      console.log('Error retrieving all the jobs');
    });
  }
  
  componentDidMount() { this.getAllJobs(); }

  render() {
    return (
      <div className="parent">
        <Header />
        <Grid className="board__container">
          <Well>
            <PageHeader className="board__header">Jobs List</PageHeader>
            <Row className="board">
              {this.state.lists.map(list => (
                <Col key={list.id} xs={6} md={4}>
                  <Panel className="list">
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">{list.status}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <AddJob getAllJobs={this.getAllJobs}/>
                      {list.jobs.map(job => {
                          return <EditJob key={shortid.generate()} job={job} />
                      })}
                    </Panel.Body>
                  </Panel>
                </Col>
              ))}
            </Row>
            <Row>
              <div className="addlist__btn">
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
