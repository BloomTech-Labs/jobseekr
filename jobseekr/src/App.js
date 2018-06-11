import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";

const JobSeeker = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/signIn" component={About} />
      <Route path="/signOut" component={Topics} />
    </div>
  </Router>
);


export default JobSeeker;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Jumbotron, Button } from 'react-bootstrap';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
// 				<Jumbotron>
//   <h1>JobSeekr!</h1>
//   <p>
// 		Find your next job quickly and in an organized fashion!
//   </p>
//   <p>
//     <Button bsStyle="primary">Buy Now!</Button>
//   </p>
// </Jumbotron>
//       </div>
//     );
//   }
// }

// export default App;
