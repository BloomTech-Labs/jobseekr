import React, { Component } from 'react';
import {
  Grid,
  Row,
  PageHeader,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Well,
} from 'react-bootstrap';
import Header from '../../components/header';
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleSignIn = e => {
    e.preventDefault();
    let body = { ...this.state };
    axios
      .post('http://localhost:5000/signup', { username: body.username, password: body.password })
      .then(result => {
        localStorage.setItem('token', result.data.token);
        this.props.history.push('/jobs');
      })
      .catch(() => {
        console.log('Incorrect username or password');
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Grid className="SignInWrapper">
          <Row>
            <PageHeader>Sign Up</PageHeader>
            <Col xs={8} md={4}>
              <Well>
                <form>
                  <FormGroup controlId="formControlsUsername">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="username"
                      value={this.state.username}
                      placeholder="Enter Username"
                      onChange={e => this.setState({ username: e.target.value })}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup controlId="formControlsPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      value={this.state.password}
                      placeholder="Enter Password"
                      onChange={e => this.setState({ password: e.target.value })}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <Button onClick={e => this.handleSignIn(e)}>Sign Up</Button>
                </form>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
