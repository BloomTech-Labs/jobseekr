import React from 'react';
import { Image } from 'react-bootstrap';
import Team1 from '../Images/Daniel.png';
import Team2 from '../Images/Jon.png';
import Team3 from '../Images/AaronProfile.png';
import Team4 from '../Images/Cliff.png';


const Team = () =>
  (
    <div className="TeamWrapper">
      <h3 className="teamh3">
        <strong>
          The Dream Team:
        </strong>
      </h3>
      <div className="profiles__container">
      <div className="profiles__rt-container">
      <div className="lp-profile-pic">
        <Image width={164} height={164} src={Team1} alt="thumbnail" circle />
        <h3>Daniel Lara</h3>
        <p>BackEnd Ninja</p>
      </div>
      <div className="lp-profile-pic">
        <Image width={164} height={164} src={Team2} alt="thumbnail" circle />
        <h3>Jonathan Bry</h3>
        <p>FrontEnd Wizard</p>
      </div>
      </div>
      <div className="profiles__lt-container">
      <div className="lp-profile-pic">
        <Image width={164} height={164} src={Team3} alt="thumbnail" circle />
        <h3>Aaron Burk</h3>
        <p>Epitome Of Fullstack</p>
      </div>
      <div className="lp-profile-pic">
        <Image width={164} height={164} src={Team4} alt="thumbnail" circle />
        <h3>Cliff Kang</h3>
        <p>Full Stack Superstar</p>
      </div>
      </div>
      </div>
    </div>
  );
// add href to people's websites
export default Team;
