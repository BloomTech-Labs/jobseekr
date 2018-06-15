import React from 'react';
import { Media, Image } from 'react-bootstrap';

const Team = () =>
  (
    <div className="TeamWrapper">
      <Media>
        <Media.Left align="top">
          <Image width={164} height={164} src="https://source.unsplash.com/user/erondu" alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Top aligned media</Media.Heading>
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
        <Media.Left align="middle">
          <Image width={164} height={164} src="https://source.unsplash.com/user/phil" alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Middle aligned media</Media.Heading>
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
        <Media.Left align="bottom">
          <Image width={164} height={164} src="https://source.unsplash.com/user/sarah" alt="thumbnail" circle />
        </Media.Left>
        <Media.Body>
          <Media.Heading>Bottom aligned media</Media.Heading>
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
