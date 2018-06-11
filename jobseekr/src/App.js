import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Jumbotron>
  <h1>JobSeekr!</h1>
  <p>
		Find your next job quickly and in an organized fashion!
  </p>
  <p>
    <Button bsStyle="primary">Buy Now!</Button>
  </p>
</Jumbotron>
      </div>
    );
  }
}

export default App;
