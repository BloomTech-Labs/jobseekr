import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Header from '../../components/header';


class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      oldPassword: '',
      newPassword: '', 
    };
  }

  handleChange(e) {
    this.setState({ email: e.target.email,
      oldPassword: e.target.oldPassword,
      newPassword: e.target.newPassword, 
    });
  }

  render() {
    return (
      <div className="parent">
        <Header />
        <form>
          <FormGroup
            controlId="formControlsEmail"
          >
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Must use a valid email address.</HelpBlock>
          </FormGroup>
          <FormGroup
            controlId="formControlsOldPassword"
          >
            <ControlLabel>Old Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.oldPassword}
              placeholder="Enter old password"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Username must be at least 10 characters long.</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Settings;
