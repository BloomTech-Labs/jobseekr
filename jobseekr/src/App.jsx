import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddJob from "./components/addJob";
import Billing from "./components/billing";
import Contributions from "./components/contributions";
import Jobs from "./components/jobs";
import LandingPage from "./components/landingPage";
import MeetUps from "./components/meetUps";
import Settings from "./components/settings";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";

const JobSeeker = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signOut" component={SignOut} />
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