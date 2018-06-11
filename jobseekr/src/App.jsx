import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/header';

const App = () =>
  (
    <div className="App">
      <Header />
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

export default App;
