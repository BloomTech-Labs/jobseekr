import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
<<<<<<< HEAD:jobseekr/src/routes/landingPage/index.jsx
import Header from '../../components/header';
import JobSeekr from './jobSeekr.png';
import Team from '../../components/Team';


const LandingPage = () =>
  (
    <div className="parent">
      {/* <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" />
      </head> */}
      <Header />
      <div className="gradient" alt="Job Seekr" id="one" >
        <div className="pngBox" >
          <img src={JobSeekr} className="png1" alt="hello" />

        </div>
        <h3 className="titles" >JobSeeker
        </h3>
        <p className="paragraphs">
          Sweating the small stuff, so you dont have to!
        </p>
      </div>
      <Jumbotron className="AttentionDiv" id="two">
        <h1 >JobSeekr!</h1>
        <p>
        Find your next job quickly <br /> and in an organized fashion!
        </p>
        <p>
          <Button bsStyle="primary">Buy Now!</Button>
        </p>
      </Jumbotron>
      <Team />
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
