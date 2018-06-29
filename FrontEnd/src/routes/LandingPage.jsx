import React from 'react';
import { Header, Team, AppDescription } from '../components/AllComponents';
import JobSeekr from '../Images/jobSeekr.png';
import CityScape from '../Images/CityScape.png';

const LandingPage = () =>
  (
    <div className="parent">
      <Header />
      <div className="gradient" alt="Job Seekr" id="one" >
        <img src={CityScape} className="png2" alt="hello" />
        <div className="pngBox" >
          <img src={JobSeekr} className="png1" alt="hello" />

        </div>
        <p className="paragraphs">
          Sweating the small stuff, so you dont have to!
        </p>
        <button className="LoginCTA1" >
          Login!
        </button>
      </div>
      <AppDescription />
      <Team />
      <div className="AttentionDiv1" id="two">
        <h1 className="titles">JobSeekr!</h1>
        <p className="paragraphs">Find your next job quickly and in an organized fashion!</p>
        <p>
          <button className="LoginCTA2" >Buy Now!</button>
        </p>
      </div>
    </div>
  );

export default LandingPage;
