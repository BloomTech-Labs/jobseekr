/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import AddJob from '../components/AddJob';
import DraggableJobs from '../routes/DraggableJobs';

Enzyme.configure({ adapter: new Adapter() });

describe(`<DraggableJobs />`, () => {
  it(`should render jobs`, () => {
    const wrapper = shallow(<DraggableJobs />);

    expect(wrapper.state('lists').length).toBe(0);
  });
});
