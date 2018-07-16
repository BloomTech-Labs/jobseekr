import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AddJob, Header } from './components/AllComponents';
import {
  LandingPage,
  Billing,
  Contributions,
  // Jobs,
  DraggableJobs,
  MeetUps,
  Settings,
  Login,
  SignUp,
  SignOut,
} from './routes/AllRoutes';
import dataWrapper from './dataWrapper';

const wrappedLandingPage = dataWrapper(LandingPage);
const wrappedDraggableJobs = dataWrapper(DraggableJobs);

const JobSeeker = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={wrappedLandingPage} />
      <Route path="/addjob" component={AddJob} />
      <Route path="/billing" component={Billing} />
      <Route path="/contributions" component={Contributions} />
      <Route path="/jobs" component={wrappedDraggableJobs} />
      <Route path="/meetups" component={MeetUps} />
      <Route path="/settings" component={Settings} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
    </div>
  </Router>
);

export default JobSeeker;
