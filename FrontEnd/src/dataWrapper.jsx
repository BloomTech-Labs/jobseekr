import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';

const dataWrapper = Wrapped =>
  class mouse extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isPositionOutside: true,
        position: {
          x: 0,
          y: 0,
        },
      };
    }

    render() {
      console.log(this.state);
      return (
        <ReactCursorPosition
          {...{
            className: 'example__target',
            onPositionChanged: props => this.setState(props),
          }}
        >
          <Wrapped />
        </ReactCursorPosition>
      );
    }
  };

export default dataWrapper;
