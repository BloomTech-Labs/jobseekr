import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Header from '../../components/header';
import JobSeekr from './jobSeekr.png';
import Team from '../../components/team';


const LandingPage = () =>
  (
    <div className="parent">
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" />
      </head>
      <Header />
      <div className="gradient" alt="Job Seekr" id="one" justify-content-md-center>
        <div className="pngBox" >
          <img src={JobSeekr} className="png1" alt="hello" />

        </div>
        <h3 className="titles" justify-content-md-center>JobSeeker
        </h3>
        <p className="paragraphs" justify-content-md-center >
          Sweating the small stuff, so you dont have to!
        </p>
      </div>
      <Jumbotron justify-content-md-center className="AttentionDiv" id="two">
        <h1 justify-content-md-center >JobSeekr!</h1>
        <p justify-content-md-center >
        Find your next job quickly <br /> and in an organized fashion!
        </p>
        <p>
          <Button bsStyle="primary">Buy Now!</Button>
        </p>
      </Jumbotron>
      <Team />
    </div>
    <Jumbotron className="AttentionDiv" id="two">
      <h1>JobSeekr!</h1>
      <p>Find your next job quickly and in an organized fashion!</p>
      <p>
        <Button bsStyle="primary">Buy Now!</Button>
      </p>
    </Jumbotron>
  </div>
);

export default LandingPage;
