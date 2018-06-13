import React, { Component } from 'react';
import Header from '../../components/header';

class Jobs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      listTitles: [
        'Wishlist',
        'Applied',
        'Phone',
        'On Site',
        'Offer',
        'Rejected',
        'Add List',
      ],
    };
  }

  render() {
    return (
      <div className="parent">
        <Header />
        <div className="jobs-list__header">
          Jobs List
        </div>
        <div className="board">
          {this.state.listTitles.map(title => (
            <div className="list" key="">
              {title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
