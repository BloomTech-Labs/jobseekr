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
        { id: 1, status: 'Want to Apply', jobs: [] },
        { id: 2, status: 'Submitted Job App', jobs: [] },
        { id: 3, status: 'Received Response', jobs: [] },
        { id: 4, status: 'Phone Interview', jobs: [] },
        { id: 5, status: 'On Site Interview', jobs: [] },
        { id: 6, status: 'Technical Interview', jobs: [] },
        { id: 7, status: 'Offer', jobs: [] },
        { id: 8, status: 'Rejected', jobs: [] },
      ],
    };
  }

  getAllJobs = () => {
    const token = localStorage.getItem('token');
    axios
      .get(`${ROOT_URL}/jobs`, { headers: { "Authorization": token }})
      .then(jobs => {
        jobs = jobs.data;
        const newList = this.state.lists;
        jobs.forEach(job => {
          for (let i = 0; i < newList.length; i++) {
            if (newList[i].status === job.status) {
              newList[i].jobs.push(job);
              break;
            }
          }
        });
        this.setState({ lists: newList });
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
                      <AddJob currentStatus={list.status} getAllJobs={this.getAllJobs}/>
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
