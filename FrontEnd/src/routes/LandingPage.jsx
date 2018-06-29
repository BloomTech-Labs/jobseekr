import React from 'react';
import { Header, Team } from '../components/AllComponents';
import JobSeekr from '../Images/jobSeekr.png';
import CityScape from '../Images/CityScape.png';

const LandingPage = () =>
  (
    <div className="parent">
      {/* <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" />
      </head> */}
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
      <Team />
      <div className="AttentionDiv1" id="two">
        <h1 className="titles">JobSeekr!</h1>
        <p className="paragraphs">Find your next job quickly and in an organized fashion!</p>
        <p>
          <button className="LoginCTA2" >Buy Now!</button>
        </p>
      </div>
    </div>
    <Jumbotron className="AttentionDiv" id="two">
      <h1 className="titles">JobSeekr!</h1>
      <p className="paragraphs">
        Find your next job quickly <br /> and in an organized fashion!
      </p>
      <p>
        <Button bsStyle="primary">Buy Now!</Button>
      </p>
    </Jumbotron>
    <Team />
    <Jumbotron className="AttentionDiv" id="two">
      <h1 className="titles">JobSeekr!</h1>
      <p className="paragraphs">Find your next job quickly and in an organized fashion!</p>
      <p>
        <Button bsStyle="primary">Buy Now!</Button>
      </p>
    </Jumbotron>
  </div>
);

export default LandingPage;
