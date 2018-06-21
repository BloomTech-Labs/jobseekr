import React, { Component } from 'react';
import { Popover, Button, Modal, OverlayTrigger, SplitButton, MenuItem, Glyphicon, Tooltip, Checkbox, FormControl } from 'react-bootstrap';

class AddJob extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="Add Job">
        Add a new job to the list.
      </Popover>
    );
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
                <div className="top-left-section">
                  <Checkbox checked readOnly>
                    Want to Apply
                  </Checkbox>
                  <Checkbox checked readOnly>
                    Received Response
                  </Checkbox>
                  <Checkbox checked readOnly>
                    On-Site Interview
                  </Checkbox>
                  <Checkbox checked readOnly>
                    Offer
                  </Checkbox>
                </div>
                <div className="top-middle-section">
                  <Checkbox checked readOnly>
                    Submitted Job App
                  </Checkbox>
                  <Checkbox checked readOnly>
                    Phone Interview
                  </Checkbox>
                  <Checkbox checked readOnly>
                    Technical Interview
                  </Checkbox>
                </div>
                <div className="top-right-section">
                  <Checkbox checked readOnly>
                    Got a Rejection
                  </Checkbox>
                  <Button>
                    Upload Rejection Letter
                  </Button>
                  <Checkbox checked readOnly>
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
