import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './routes/landingPage';
import Billing from './routes/billing';
import Contributions from './routes/contributions';
import Jobs from './routes/jobs';
import MeetUps from './routes/meetUps';
import Settings from './routes/settings';
import Login from './routes/Login';
import SignOut from './routes/signOut';
import SignUp from './routes/SignUp';

const JobSeeker = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/billing" component={Billing} />
      <Route path="/contributions" component={Contributions} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/meetups" component={MeetUps} />
      <Route path="/settings" component={Settings} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
    </div>
  </Router>
);

export default JobSeeker;
