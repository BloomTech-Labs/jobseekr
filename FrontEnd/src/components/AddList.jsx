import React, { Component } from 'react';
import { Popover, Button, Modal, OverlayTrigger, Glyphicon, Tooltip } from 'react-bootstrap';

class AddList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="Add List">
        Add a new list to the list.
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">Add a new category to the lists.</Tooltip>;

    return (
      <div>
        <OverlayTrigger overlay={tooltip}>
          <Button bsStyle="primary" bsSize="large" onClick={() => this.setState({ show: true })}>
            Add List &nbsp;<Glyphicon glyph="">+</Glyphicon>
          </Button>
        </OverlayTrigger>

        <Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </p>
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
