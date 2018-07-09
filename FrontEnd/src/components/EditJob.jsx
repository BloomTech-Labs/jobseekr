import React, { Component } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import moment from 'moment';
import { 
  ToggleButtonGroup, 
  DropdownButton,
  Button, 
  Modal, 
  OverlayTrigger, 
  Radio, 
  MenuItem, 
  Tooltip, 
  Checkbox, 
  FormControl,
  Panel
} from 'react-bootstrap';
import ROOT_URL from '../routes/config';

class EditJob extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      job: this.props.job,
      show: false,
      timelineSelection: this.props.job.status,
      // list: ['Want to Apply', 'Submitted Job App', 'Received Response', 'Phone Interview', 'On Site Interview', 'Technical Interview', 'Offer'],
      gotRejected: this.props.job.gotRejected,
      gotOffer: this.props.job.gotOffer,
      notes: this.props.job.notes,
      companyName: this.props.job.companyName,
      position: this.props.job.position,
      jobPostingLink: this.props.job.jobPostingLink,
      pointOfContactName: this.props.job.pointOfContactName,
      contactInfo: this.props.job.contactInfo,
      sourceOfJob: ['Met in Person', 'Referral', 'Applied Online'],
      sourceSelection: this.props.job.sourceOfJob || 'Source of Job',
      _id: this.props.job._id,
    };
  }

  handleEditJob = e => {
    e.preventDefault();
    const body = this.state;
    axios
      .put(`${ROOT_URL}/jobs`, {
        status: body.timelineSelection,
        gotRejected: body.gotRejected,
        gotOffer: body.gotOffer,
        notes: body.notes,
        companyName: body.companyName,
        position: body.position,
        jobPostingLink: body.jobPostingLink,
        pointOfContactName: body.pointOfContactName,
        contactInfo: body.contactInfo,
        sourceOfJob: body.sourceSelection,
        _id: body._id,
      })
      .then(() => this.props.getAllJobs())
      .then(() => this.setState({ show: false }))
      .catch(err => console.log({ error: err}));
  };

  handleTimelineRadioClick = (selection) => {
    this.setState({ timelineSelection: selection });
  }

  handleCheckbox = (e) => {
    const toBeChanged = e.target.value;
    this.setState({ [toBeChanged] : !this.state[toBeChanged] })
  }

  handleChange = (e) => {
    const change = e.target.value;
    this.setState({ [e.target.id] : change });
  }

  handleSourceClick = (key, e) => {
    this.setState({ sourceSelection: key });
  }
  
  render() {
    const tooltip = <Tooltip id="modal-tooltip">Edit Job.</Tooltip>;
    const statuses = [];
    this.props.lists.forEach(list => statuses.push(list.status));

    return (
      <div>
        <OverlayTrigger overlay={tooltip}>
          <Panel key={this.state.job._id} className='job' onClick={() => this.setState({ show: true })}>
            <Panel.Heading>
              <Panel.Title componentClass='h4'>{this.state.job.companyName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Panel.Title componentClass='h4'>{this.state.job.position}</Panel.Title>
              <Panel.Title componentClass='h6'>Last updated: {moment(this.state.job.updatedAt).fromNow()}</Panel.Title>
            </Panel.Body>
          </Panel>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Job Timeline</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div className="top-section-job-modal">
                <div className="top-left-section">
                  <ToggleButtonGroup 
                    type="radio" 
                    name="timeline" 
                    value={[this.state.timelineSelection]} 
                    onChange={this.handleTimelineRadioClick}
                  >
                    {statuses.slice(0, Math.ceil(statuses.length / 2)).map(e => {
                      return <Radio key={shortid.generate()} value={e}>{e}</Radio>
                    })}
                  </ToggleButtonGroup>
                </div>
                <div className="top-middle-section">
                  <ToggleButtonGroup 
                    type="radio" 
                    name="timeline" 
                    value={[this.state.timelineSelection]} 
                    onChange={this.handleTimelineRadioClick}
                  >
                    {statuses.slice(Math.ceil(statuses.length / 2)).map(e => {
                      return <Radio key={shortid.generate()} value={e}>{e}</Radio>
                    })}
                  </ToggleButtonGroup>
                </div>
                <div className="top-right-section">
                  <Checkbox 
                    checked={this.state.gotRejected} 
                    value={"gotRejected"}
                    onChange={this.handleCheckbox} 
                    readOnly
                  >
                    Got a Rejection
                  </Checkbox>
                  <Button>
                    Upload Rejection Letter
                  </Button>
                  <Checkbox 
                    checked={this.state.gotOffer} 
                    value={"gotOffer"}
                    onChange={this.handleCheckbox} 
                    readOnly
                  >
                    Got an Offer
                  </Checkbox>
                  <Button>
                    Upload Offer Letter
                  </Button>
                </div>
              </div>
              <FormControl 
                componentClass="textarea" 
                value={this.state.notes} 
                placeholder="Notes"
                id='notes'
                onChange={this.handleChange}
              />
            </Modal.Body>
            <Modal.Header closeButton>
              <Modal.Title>Job Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="bottom-section-job-modal">
                <div className="bottom-left-section">
                  <FormControl 
                    type="text" 
                    placeholder="Company Name" 
                    id='companyName'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                  />
                  <FormControl 
                    type="text" 
                    placeholder="Point of Contact Name" 
                    id='pointOfContactName'
                    value={this.state.pointOfContactName}
                    onChange={this.handleChange}
                  />
                  <FormControl 
                    type="text" 
                    placeholder="Contact Info"
                    id='contactInfo'
                    value={this.state.contactInfo}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="bottom-right-section">
                  <FormControl 
                    type="text" 
                    placeholder="Position Applied For" 
                    id='position'
                    value={this.state.position}
                    onChange={this.handleChange}
                  />
                  <DropdownButton title={this.state.sourceSelection} id='source-of-job-dropdown'>
                    {this.state.sourceOfJob.map(e => {
                      return <MenuItem key={shortid.generate()} eventKey={e} onSelect={this.handleSourceClick}>{e}</MenuItem>
                    })}
                  </DropdownButton>
                  <FormControl 
                    type="text" 
                    placeholder="Link to Job Posting" 
                    id='jobPostingLink'
                    value={this.state.jobPostingLink}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </Modal.Body>
          </form>
          <Modal.Footer>
            <Button onClick={this.handleEditJob}>Save Edits</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditJob;
