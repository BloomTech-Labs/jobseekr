/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchJobs from '../components/SearchJobs';
import DraggableJobs from '../routes/DraggableJobs';

Enzyme.configure({ adapter: new Adapter() });

describe(`<DraggableJobs />`, () => {
  let wrapper, wrapper2, jobs, newList;

  beforeEach(() => {
    localStorage.setItem('token', process.env.REACT_APP_TEST_TOKEN);

    wrapper = shallow(<DraggableJobs />);

    wrapper2 = wrapper.find(SearchJobs).shallow();

    const newList = [
      { id: 1, status: 'Want to Apply', jobs: [] },
      { id: 2, status: 'Submitted Job App', jobs: [] },
      { id: 3, status: 'Received Response', jobs: [] },
      { id: 4, status: 'Phone Interview', jobs: [] },
      { id: 5, status: 'On Site Interview', jobs: [] },
      { id: 6, status: 'Technical Interview', jobs: [] },
      { id: 7, status: 'Offer', jobs: [] },
      { id: 8, status: 'Rejected', jobs: [] },
    ];

    const jobs = [
      {
        jobId: '',
        bypassDup: false,
        _id: '5b7c92fd29e28e09f41e13ce',
        status: 'Want to Apply',
        notes: '',
        companyName: 'C2S',
        position: 'Video Game Tester',
        jobPostingLink: '',
        pointOfContactName: '',
        contactInfo: '',
        sourceOfJob: 'Source of Job',
        rejectionUrl: '',
        offerUrl: '',
        user: '5b7c92ed29e28e09f41e13cd',
        createdAt: '2018-08-21T22:32:29.770Z',
        updatedAt: '2018-08-21T22:32:29.770Z',
        __v: 0,
      },
      {
        jobId: '',
        bypassDup: false,
        _id: '5b7c931129e28e09f41e13cf',
        status: 'Want to Apply',
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
        createdAt: '2018-08-21T22:32:49.285Z',
        updatedAt: '2018-08-21T22:32:49.285Z',
        __v: 0,
      },
      {
        jobId: '',
        bypassDup: false,
        _id: '5b7ef288491c611957cc01e9',
        status: 'Submitted Job App',
        notes: '',
        companyName: 'a',
        position: 'a',
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

    expect(wrapper.state('lists').length).toBe(0);

    wrapper.setState({
      lists: newList,
      _originalLists: newList,
    });

    expect(wrapper.state().lists[1].jobs).toHaveLength(1);
    expect(wrapper.state().lists[0].jobs).toHaveLength(2);

    wrapper2.setProps({
      lists: newList,
      originalLists: newList,
      returnOriginal: wrapper.instance().returnOriginalLists,
      updateJobs: wrapper.instance().updateJobsFromSearch,
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  it(`should have a SearchJobs component`, () => {
    expect(wrapper.find(SearchJobs)).toHaveLength(1);
  });

  it(`should filter jobs`, () => {
    const query = 'c2';

    wrapper2.instance().filterLists({ target: { value: query } });
    expect(wrapper.state().lists[0].jobs).toHaveLength(1);
    expect(wrapper.state().lists[1].jobs).toHaveLength(0);
  });

  it(`should reset the filter correctly`, () => {
    expect(wrapper.state().lists[0].jobs).toHaveLength(2);
    expect(wrapper.state().lists[1].jobs).toHaveLength(1);

    const query = 'null';

    wrapper2.instance().filterLists({ target: { value: query } });
    expect(wrapper.state().lists[0].jobs).toHaveLength(0);
    expect(wrapper.state().lists[1].jobs).toHaveLength(0);

    wrapper2.instance().resetSearch();

    expect(wrapper.state().lists[0].jobs).toHaveLength(2);
    expect(wrapper.state().lists[1].jobs).toHaveLength(1);
  });
});
