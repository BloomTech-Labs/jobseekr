import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddJob from '../components/AddJob';
import DraggableJobs from '../routes/DraggableJobs';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @jest-environment jsdom
 */
describe(`<DraggableJobs />`, _ => {
  it(`should render jobs`, _ => {
    const wrapper = shallow(<DraggableJobs />);

    // expect(wrapper.state('lists')).to.be.empty;
  });
});
