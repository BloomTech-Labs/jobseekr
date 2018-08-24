/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormControl } from 'react-bootstrap';

import EditJob from '../components/EditJob';

import DraggableJobs from '../routes/DraggableJobs';
Enzyme.configure({ adapter: new Adapter() });

describe(`<EditJob />`, () => {
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

    jobs = [
      {
        jobId: '',
        bypassDup: false,
        _id: '5b7ef288491c611957cc01e9',
        status: 'Submitted Job App',
        notes: '',
        companyName: 'Lambda School',
        position: 'Software Engineer',
        jobPostingLink: '',
        pointOfContactName: '',
        contactInfo: '',
        sourceOfJob: 'Source of Job',
        rejectionUrl: '',
        offerUrl: '',
        user: '5b7c92ed29e28e09f41e13cd',
        createdAt: '2018-08-23T17:44:40.248Z',
        updatedAt: '2018-08-23T17:44:40.248Z',
        __v: 0,
      },
    ];

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
      <EditJob
        lists={newList}
        key={''}
        job={jobs[0]}
        getAllJobs={parent.instance().getAllJobs}
      />,
    );
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(`should have one job in Submitted Job App`, () => {
    expect(parent.state('lists')[1].jobs).toHaveLength(1);
  });

  it(`should have nine FormControl components, one of which is jobId`, () => {
    expect(wrapper.find(FormControl)).toHaveLength(9);
  });
});
