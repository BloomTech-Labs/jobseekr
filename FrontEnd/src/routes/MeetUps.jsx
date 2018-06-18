import React from 'react';
import { Header } from '../components/AllComponents';
import { Button } from 'react-bootstrap';

const MeetUps = () => (
  <div className="parent">
    <Header />
    <div className="MeetupsWrapper">
      <h1>MeetUps</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Link</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Date...</th>
            <td>Link...</td>
            <td>Notes...</td>
          </tr>
          <tr>
            <th scope="row">Date...</th>
            <td>Link...</td>
            <td>Notes...</td>
          </tr>
          <tr>
            <th scope="row">Date...</th>
            <td>Link...</td>
            <td>Notes...</td>
          </tr>
        </tbody>
      </table>
      <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Activity" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Link" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Notes" />
          </div>
          <div className="plusDiv">
            <Button bsStyle="primary">+</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default MeetUps;
