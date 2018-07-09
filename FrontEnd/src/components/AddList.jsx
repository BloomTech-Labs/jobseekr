import React, { Component } from 'react';
import { Button, Modal, OverlayTrigger, Glyphicon, Tooltip, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class AddList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };
  }

  handleChange = (e) => {
    const change = e.target.value;
    this.setState({ [e.target.id] : change });
  }

  render() {
    const tooltip = <Tooltip id="modal-tooltip">Add a new category to the lists.</Tooltip>;
    const statuses = [];
    this.props.lists.forEach(list => statuses.push(list.status));

    return (
      <div>
        <OverlayTrigger overlay={tooltip}>
          <Button onClick={() => this.setState({ show: true })}>
            Add List &nbsp;<Glyphicon glyph="">+</Glyphicon>
          </Button>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Add list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>New Job Status</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="e.g. Interview Followup"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Add a new status to the list.</HelpBlock>
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ show: false })}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddList;
