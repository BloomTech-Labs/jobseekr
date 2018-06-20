import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Header } from '../components/AllComponents';
import axios from 'axios';
import ROOT_URL from './config';

class MeetUps extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dateOfEvent: moment(),
      eventName: '',
      linkToEvent: '',
      notes: '',
      token: localStorage.getItem('token'),
    };
  }

  handleDateChange = (date) => {
    this.setState({
      dateOfEvent: date
    });
  }
  

  handleCreateMeetup = e => {
    e.preventDefault();
    let body = { ...this.state };
    axios
      .post(`${ROOT_URL}/meetups`, {
        dateOfEvent: body.dateOfEvent.format(),
        eventName: body.eventName,
        linkToEvent: body.linkToEvent,
        notes: body.notes,
        token: body.token,
      })
      .then(result => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="parent">
        <Header />
        <div className="MeetupsWrapper">
          <h1>MeetUps</h1>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Activity | Link</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Date...</th>
                <td>
                  Activity...
                  <Button bsSize="small">
                    <Glyphicon glyph="link" />
                  </Button>
                </td>
                <td>Notes...</td>
              </tr>
              <tr>
                <th scope="row">Date...</th>
                <td>
                  Activity...
                  <Button bsSize="small">
                    <Glyphicon glyph="link" />
                  </Button>
                </td>
                <td>Notes...</td>
              </tr>
              <tr>
                <th scope="row">Date...</th>
                <td>
                  Activity...
                  <Button bsSize="small">
                    <Glyphicon glyph="link" />
                  </Button>
                </td>
                <td>Notes...</td>
              </tr>
            </tbody>
          </table>
          <form>
            <div className="form-row">
              <Glyphicon glyph="calendar" />
              <div className="col">
                <DatePicker
                  className="form-control"
                  selected={this.state.dateOfEvent}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className="col">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Activity" 
                  onChange={e => this.setState({ eventName: e.target.value })}
                />
              </div>
              <div className="col">
                <input 
                  type="text"
                  className="form-control" 
                  placeholder="Link" 
                  onChange={e => this.setState({ linkToEvent: e.target.value })}
                />
              </div>
              <div className="col">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Notes" 
                  onChange={e => this.setState({ notes: e.target.value })}
                />
              </div>
              <div className="plusDiv">
                <Button 
                  bsStyle="primary"
                  onClick={e => this.handleCreateMeetup(e)}
                >
                  +
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MeetUps;
