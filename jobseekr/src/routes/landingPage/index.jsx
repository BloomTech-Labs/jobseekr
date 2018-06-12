import React from 'react';
import Header from '../../components/header';

const LandingPage = () =>
  (
    <div className="parent">
      <Header />
      <div className="LandingWrapper">
        <div className="first" id="first">
          <h4>hello im Landing Page1
          </h4>
        </div>
        <div className="second" id="second">
          <h4>hello im Landing Page2
          </h4>
        </div>
        <div className="third" id="third">
          <h4>hello im Landing Page3
          </h4>
        </div>
      </div>
    </div>
  );

export default LandingPage;
