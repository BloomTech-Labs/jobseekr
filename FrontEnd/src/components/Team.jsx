import React from 'react';
import { Media, Image } from 'react-bootstrap';
import Team1 from '../Images/Daniel.png';
import Team2 from '../Images/Jon.png';
import Team3 from '../Images/Aaron.png';
import Team4 from '../Images/Cliff.png';


const Team = () =>
  (
    <div className="TeamWrapper">
      <Media>
        <h3 className="teamh3">
          <strong>
          The Dream Team:
          </strong>
        </h3>
        <Media.Left align="top">
          <Image width={164} height={164} src={Team1} alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Daniel Lara - BackEnd Ninja</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="top">
          <Image width={164} height={164} src={Team2} alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Jonathan Bry - FrontEnd Wizard</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="top">
          <Image width={164} height={164} src={Team3} alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Aaron Berk - Epitome Of Fullstack </Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
      <Media>
        <Media.Left align="top">
          <Image width={164} height={164} src={Team4} alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Cliff Kang - Full Stack Superstar</Media.Heading>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
// add href to people's websites
export default Team;

// import React from 'react';

// const Team = () =>
//   (
//     <div className="TeamWrapper">
//       <h3>
//         Our Team
//       </h3>
//       <div className="card">
//         <img className="card-img-top" src="..." alt="Car" />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//            Some quick example text to build on the card title
//            and make up the bulk of the cards content.</p>
//           <a href="/" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
//   );
// // add href to people's websites
// export default Team;
