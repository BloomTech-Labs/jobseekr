import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

export default class SearchJobs extends React.Component {
  state = {
    query: '',
    lists: [],
  };

  /**
   * set original list to bubble up after search is finished
   * when comp mounts
   */
  componentDidMount() {
    this.setState({ lists: this.props.lists });
  }

  checkIfReturn = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return this._filterLists(e);
    }
  };

  handleChange = e => {
    // this.props.returnOriginal();
    this.setState({ query: e.target.value });
    this._filterLists(e);
  };

  _filterLists = e => {
    // this.setState({ query: e.target.value });
    // const q = this.state.query + e.target.value;
    // console.log('q', q);
    // const q = this.state.query;
    const q = e.target.value;
    console.log('q', q);
    // console.log('q', this.state.query);
    // console.log('state lists', this.state.lists);
    // if (this.state.query === '') return this.props.returnOriginal();
    if (q === '') return this.props.returnOriginal();

    const filteredLists = this.props.originalLists.map(list => {
      // console.log('object vals', Object.values(list.jobs[0]));
      return {
        ...list,
        jobs: list.jobs.filter(job =>
          Object.values(job)
            .map(w => (w ? w.toLowerCase() : w))
            .join(' ')
            .includes(q.toLowerCase()),
        ),
      };
      //   const q = this.state.query;

      //   console.log(Object.values(job));
      //   if (Object.values(job).includes(q)) return true;
      //   return false;
      // });
    });

    console.log('filtered lists', filteredLists);

    this.props.updateJobs(filteredLists);
  };

  render() {
    console.log('state lists', this.state.lists);
    console.log('props lists', this.props.lists);

    return (
      <form className="SearchJobs">
        <FormGroup controlId="formControlsQueryJobs">
          <FormControl
            type="text"
            value={this.state.query}
            placeholder="search jobs"
            // onChange={e => this._filterLists(e)}
            // onChange={e => this.setState({ query: e.target.value })}
            onChange={e => this.handleChange(e)}
            onKeyPress={e => this.checkIfReturn(e)}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}
