import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Header from '../../components/header';


class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  getValidationState() {
    const { length } = this.state.value;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
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
            <HelpBlock>Password must match existing password.</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Settings;
