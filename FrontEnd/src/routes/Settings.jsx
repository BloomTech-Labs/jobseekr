import React from 'react';
import axios from 'axios'; 
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
import ROOT_URL from './config';

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
      file: null,
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

  handleEmailSubmit = (e) => {
    e.preventDefault();
    const body = { ...this.state };
    const token = localStorage.getItem('token');
    axios
      .put(`${ROOT_URL}/changeemail`, {
        oldEmail: body.oldEmail,
        newEmail: body.newEmail,
        token,
      })
      .then(result => {
        alert(`Your new email is ${result.data.email}`);
      })
      .catch(() => {
        console.log('Error changing email');
      });
  }

  handleFileUpload = (e) => {
    this.setState({ file: e.target.files[0] })
    console.log("file on change: ", this.state.file);
    
  }

  // getSignedRequest(){
  //   const file = this.state.files;
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
  //   xhr.onreadystatechange = () => {
  //     if(xhr.readyState === 4){
  //       if(xhr.status === 200){
  //         let response = JSON.stringify(xhr.responseText);
  //         const { signedRequest, url } = response;
  //         console.log({ response });
  //         // uploadFile(file, response.signedRequest, response.url);
  //       }
  //       else{
  //         alert('Could not get signed URL.');
  //       }
  //     }
  //   };
  //   xhr.send();
  // }

  handlePasswordSubmit = (e) => {
    e.preventDefault();
    const body = { ...this.state };
    const token = localStorage.getItem('token');
    axios
      .put(`${ROOT_URL}/changepassword`, {
        oldPassword: body.oldPassword,
        newPassword: body.newPassword,
        token,
      })
      .then(result => {
        alert(`Your new password has been saved`);
      })
      .catch(() => {
        console.log('Error changing password');
      });
  }

  handleFileSubmit = (e) => {
    e.preventDefault();
    const body = { ...this.state }
    const { file } = this.state;
    const name = file.name;
    const size = file.size;
    let formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('size', size);
    console.log("formData: ", formData);
    for (var [key, value] of formData.entries()) { 
      console.log(key, value);
    }
    axios
      .post(`${ROOT_URL}/files`, { 
        file: formData.file,
        name: formData.name,
        size: formData.size,
       })
      .then(result => {
        console.log(result);
        alert(`Your resume, ${body.name}, has been saved.`)
      })
      .catch(() => {
        console.log('Error saving file');
      });
  }

  render() {
    const { file } = this.state;
    console.log("current state of files: ", file);
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
                      <Button 
                        onClick={e => this.handleEmailSubmit(e)}
                      >
                          Save
                      </Button>

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
                      <Button onClick={e => this.handlePasswordSubmit(e)}> Save</Button>
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
                      <FormGroup>
                        <ControlLabel>Upload a copy of your Resume</ControlLabel>
                        <FormControl
                          id="resumeUplaod"
                          type="file"
                          accept=".pdf"
                          onChange={this.handleFileUpload}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Submit a .pdf file</HelpBlock>
                      </FormGroup>
                      <Button onClick={this.handleFileSubmit}>Submit</Button>
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
