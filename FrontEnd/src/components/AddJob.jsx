import React, { Component } from 'react';
import { 
  ToggleButtonGroup, 
  DropdownButton,
  ButtonToolbar, 
  Button, 
  Modal, 
  OverlayTrigger, 
  Radio, 
  MenuItem, 
  Glyphicon, 
  Tooltip, 
  Checkbox, 
  FormControl 
} from 'react-bootstrap';

class AddJob extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      timelineSelection: '',
      list: ['Want to Apply', 'Submitted Job App', 'Received Response', 'Phone Interview', 'On Site Interview', 'Technical Interview', 'Offer'],
      gotRejected: false,
      gotOffer: false,
      notes: '',
      companyName: '',
      jobPostingLink: '',
      pointOfContact : '',
      sourceOfJob: ['Met in Person', 'Referral', 'Applied Online'],
      sourceSelection: 'Source of Job',
    };
  }

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
    const change = key;
    console.log('change is', change);
    this.setState({ sourceSelection: key });
  }

  render() {
    const tooltip = <Tooltip id="modal-tooltip">Add a Job.</Tooltip>;

    return (
      <div>
        <OverlayTrigger overlay={tooltip}>
          <Button bsStyle="primary" bsSize="large" onClick={() => this.setState({ show: true })}>
            <div className="list__btn">
              <Glyphicon glyph="">+</Glyphicon>
            </div>
          </Button>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Job Timeline</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div className="top-section-job-modal">
                <ButtonToolbar>
                  <div className="top-left-section">
                    <ToggleButtonGroup 
                      type="radio" 
                      name="timeline" 
                      value={[this.state.timelineSelection]} 
                      onChange={this.handleTimelineRadioClick}
                    >
                      {this.state.list.slice(0, Math.ceil(this.state.list.length / 2)).map(e => {
                        return <Radio value={e}>{e}</Radio>
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
                      {this.state.list.slice(Math.ceil(this.state.list.length / 2)).map(e => {
                        return <Radio value={e}>{e}</Radio>
                      })}
                    </ToggleButtonGroup>
                  </div>
                </ButtonToolbar>
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
                    onChange={this.handleChange}
                  />
                  <FormControl 
                    type="text" 
                    placeholder="Link to Job Posting" 
                    id='jobPostingLink'
                    onChange={this.handleChange}
                  />
                  <FormControl 
                    type="text" 
                    placeholder="Point of Contact" 
                    id='pointOfContact'
                    onChange={this.handleChange}
                  />
                </div>
                <div className="bottom-right-section">
                  <DropdownButton title={this.state.sourceSelection}>
                    {this.state.sourceOfJob.map(e => {
                      return <MenuItem eventKey={e} onSelect={this.handleSourceClick}>{e}</MenuItem>
                    })}
                  </DropdownButton>
                  <Button>
                    Resolution (Open/Closed)
                  </Button>
                  <Button>
                    Upload Resume/CV
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </form>
          <Modal.Footer>
            <Button onClick={() => this.setState({ show: false })}>Add Job</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddJob;
