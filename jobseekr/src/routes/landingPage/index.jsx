import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Header from '../../components/header';
import JobSeekr from './jobSeekr.png';

const LandingPage = () =>
  (
    <div className="parent">
      <Header />
      <div className="gradient" alt="Job Seekr" id="one">
        <div className="pngBox" >
          <img src={JobSeekr} alt="hello" />

        </div>
        <h3 className="titles">JobSeeker
        </h3>
        <p className="paragraphs">
          Sweating the small stuff, so you dont have to!
        </p>
      </div>
      <Jumbotron className="AttentionDiv" id="two">
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

export default LandingPage;
