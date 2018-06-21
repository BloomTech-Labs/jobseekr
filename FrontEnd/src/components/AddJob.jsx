import React, { Component } from 'react';
import { Popover, Button, Modal, OverlayTrigger, Radio, FormGroup, SplitButton, MenuItem, Glyphicon, Tooltip, Checkbox, FormControl } from 'react-bootstrap';

class AddJob extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      timelineSelection: '',
      list: ['Want to Apply', 'Submitted Job App', 'Received Response', 'Phone Interview', 'On Site Interview', 'Technical Interview', 'Offer'],
    };
  }

  handleTimelineRadioClick = (e) => {
    console.log('event object is', e);
    e.preventDefault();
    const status = this.state;
    console.log('event target prop is', e.target.prop);
    console.log('event target attr is', e.target.attr);
    status.timelineSelection = e.target.value;
    this.setState(status);
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="Add Job">
    //     Add a new job to the list.
    //   </Popover>
    // );
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
                <FormGroup>
                  <div className="top-left-section">
                    {this.state.list.slice(0, Math.ceil(this.state.list.length / 2)).map(e => {
                      return (
                        <Radio 
                          name='timeline' 
                          value={e} 
                          onClick={this.handleTimelineRadioClick}
                          {...e === this.state.timelineSelection ? 'checked' : {}}>
                          {e}
                        </Radio>
                      )
                    })}
                  </div>
                  <div className="top-middle-section">
                    {this.state.list.slice(Math.ceil(this.state.list.length / 2)).map(e => {
                      return (
                        <Radio 
                          name='timeline' 
                          value={e} 
                          onClick={this.handleTimelineRadioClick}
                          {...(e === this.state.timelineSelection ? 'checked' : {})}>
                          {e}
                        </Radio>
                      )
                    })}
                  </div>
                </FormGroup>
                <div className="top-right-section">
                  <Checkbox checked readOnly>
                    Got a Rejection
                  </Checkbox>
                  <Button>
                    Upload Rejection Letter
                  </Button>
                  <Checkbox unchecked readOnly>
                    Got an Offer
                  </Checkbox>
                  <Button>
                    Upload Offer Letter
                  </Button>
                </div>
              </div>
              <FormControl componentClass="textarea" placeholder="Notes" />
              {/* <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '} */}
            </Modal.Body>
            <Modal.Header closeButton>
              <Modal.Title>Job Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="bottom-section-job-modal">
                <div className="bottom-left-section">
                  <FormControl type="text" placeholder="Company Name" />
                  <FormControl type="url" placeholder="Link to Job Posting" />
                  <FormControl type="text" placeholder="Point of Contact" />
                </div>
                <div className="bottom-right-section">
                  <SplitButton title="Source of Job">
                    <MenuItem eventKey="1">Met in Person</MenuItem>
                    <MenuItem eventKey="2">Applied Online</MenuItem>
                    <MenuItem eventKey="3">Referral</MenuItem>
                  </SplitButton>
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
