/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl } from 'react-bootstrap';

import AddJob from '../components/AddJob';

import DraggableJobs from '../routes/DraggableJobs';
Enzyme.configure({ adapter: new Adapter() });

describe(`<AddJob />`, () => {
  let parent, wrapper, jobs, newList;

  beforeEach(() => {
    localStorage.setItem('token', process.env.REACT_APP_TEST_TOKEN);

    parent = shallow(<DraggableJobs />);

    newList = [
      { id: 1, status: 'Want to Apply', jobs: [] },
      { id: 2, status: 'Submitted Job App', jobs: [] },
      { id: 3, status: 'Received Response', jobs: [] },
      { id: 4, status: 'Phone Interview', jobs: [] },
      { id: 5, status: 'On Site Interview', jobs: [] },
      { id: 6, status: 'Technical Interview', jobs: [] },
      { id: 7, status: 'Offer', jobs: [] },
      { id: 8, status: 'Rejected', jobs: [] },
    ];

    jobs = [];

    newList.forEach(list => (list.jobs = []));
    jobs.forEach(job => {
      for (let i = 0; i < newList.length; i++) {
        if (newList[i].status === job.status) {
          newList[i].jobs.push(job);
          break;
        }
      }
    });

    parent.setState({
      lists: newList,
      _originalLists: newList,
    });

    wrapper = shallow(
      <AddJob
        lists={newList}
        currentStatus={newList[0].status}
        getAllJobs={parent.instance().getAllJobs}
      />,
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(`should have a state that matches the db model`, () => {
    expect(wrapper.state('show')).toBe(false);
    expect(wrapper.state('timelineSelection')).toBe('Want to Apply');
    expect(wrapper.state('notes')).toBe('');
    expect(wrapper.state('companyName')).toBe('');
    expect(wrapper.state('position')).toBe('');
    expect(wrapper.state('jobId')).toBe('');
    expect(wrapper.state('jobPostingLink')).toBe('');
    expect(wrapper.state('pointOfContactName')).toBe('');
    expect(wrapper.state('contactInfo')).toBe('');
    expect(wrapper.state('sourceOfJob')).toMatchObject([
      'Met in Person',
      'Referral',
      'Applied Online',
    ]);
    expect(wrapper.state('sourceSelection')).toBe('Source of Job');
    expect(wrapper.state('rejectionFile')).toBe('');
    expect(wrapper.state('rejectionUrl')).toBe('');
    expect(wrapper.state('offerFile')).toBe('');
    expect(wrapper.state('offerUrl')).toBe('');
    expect(wrapper.state('currentJobId')).toBe('');
  });

  it(`should have no jobs in DraggableJobs`, () => {
    parent.state('lists').forEach(l => expect(l.jobs).toHaveLength(0));
  });

  it(`should have nine FormControl components, one of which is jobId`, () => {
    expect(wrapper.find(FormControl)).toHaveLength(9);
  });
});
