import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
  Grid,
  Row,
  Col,
  PageHeader,
  Collapse,
  Well,
  Badge,
} from 'react-bootstrap';
import { Header } from '../components/AllComponents';

class Settings extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      oldEmail: '',
      newEmail: '',
      oldPassword: '',
      newPassword: '',
      resumeOpen: false,
      changePassword: false,
      changeEmail: false,
      currentPassword: 'password',
      currentEmail: 'email@example.com',
    };
  }

  validateLength() {
    const { length } = this.state.newPassword;
    if (length > 9) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  validateMatchingPassword(password) {
    if (password === this.state.currentPassword) return 'success';
    return 'warning';
  }

  validateMatchingEmail(email) {
    if (email === this.state.currentEmail) return 'success';
    return 'warning';
  }
  // handleChange = (e) => {
  //   let { name, value } = e.target;
  //   this.setState({ [name]: value });
  // }

  render() {
    return (
      <div className="settingsWrapper">
        <Header />
        <Grid>
          <Row>
            <PageHeader>Settings</PageHeader>
            <Col xs={8} md={4}>
              <Button onClick={() => this.setState({ changeEmail: !this.state.changeEmail })}>
                Change Email
              </Button>
              <Collapse in={this.state.changeEmail}>
                <div>
                  <Well>
                    <form>
                      <FormGroup
                        controlId="formControlsOldEmail"
                        validationState={this.validateMatchingEmail(this.state.oldEmail)}
                      >
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl
                          type="email"
                          value={this.state.oldEmail}
                          placeholder="Enter email"
                          onChange={e => this.setState({ oldEmail: e.target.value })}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Must match current email address on file.</HelpBlock>
                      </FormGroup>
                      <FormGroup controlId="formControlsEmail">
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl
                          type="email"
                          value={this.state.newEmail}
                          placeholder="Enter email"
                          onChange={e => this.setState({ newEmail: e.target.value })}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Must use a valid email address.</HelpBlock>
                      </FormGroup>
                      <Button type="submit">Save</Button>
                    </form>
                  </Well>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Grid>
        <hr width="85%" />
        <Grid>
          <Row>
            <Col xs={8} md={4}>
              <Button onClick={() => this.setState({ changePassword: !this.state.changePassword })}>
                Change Password
              </Button>
              <Collapse in={this.state.changePassword}>
                <div>
                  <Well>
                    <form>
                      <FormGroup
                        controlId="formControlsOldPassword"
                        validationState={this.validateMatchingPassword(this.state.oldPassword)}
                      >
                        <ControlLabel>Old Password</ControlLabel>
                        <FormControl
                          type="password"
                          value={this.state.oldPassword}
                          placeholder="Enter old password"
                          onChange={e => this.setState({ oldPassword: e.target.value })}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Password must match existing password.</HelpBlock>
                      </FormGroup>
                      <FormGroup
                        controlId="formControlsNewPassword"
                        validationState={this.validateLength()}
                      >
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl
                          type="password"
                          value={this.state.newPassword}
                          placeholder="Enter new password"
                          onChange={e => this.setState({ newPassword: e.target.value })}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Password must be at least 10 characters long.</HelpBlock>
                      </FormGroup>
                      <Button type="submit">Save</Button>
                    </form>
                  </Well>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Grid>
        <hr width="85%" />
        <Grid>
          <Row>
            <Col xs={8} md={4}>
              <p>
                documents <Badge>0</Badge>
              </p>
              <Button onClick={() => this.setState({ resumeOpen: !this.state.resumeOpen })}>
                Add Resume
              </Button>
              <Collapse in={this.state.resumeOpen}>
                <div>
                  <Well>
                    <form>
                      <FormGroup controlId="formControlsFile">
                        <ControlLabel>Upload a copy of your Resume</ControlLabel>
                        <FormControl type="file" />
                        <FormControl.Feedback />
                        <HelpBlock>Submit a .docx or .pdf file</HelpBlock>
                      </FormGroup>
                      <Button type="submit">Submit</Button>
                    </form>
                  </Well>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Settings;
