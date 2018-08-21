import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

export default class SearchJobs extends React.Component {
  state = { query: '', lists: [] };

  componentDidMount() {
    this.setState({ lists: this.props.lists });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ query: e.target.value });
    this.filterLists(e);
  };

  filterLists = e => {
    const q = e.target.value;

    this.props.updateJobs(
      this.props.originalLists.map(list => ({
        ...list,
        jobs: list.jobs.filter(job =>
          Object.values(job)
            .map(w => (w ? w.toLowerCase() : w))
            .reduce(
              (boo, w) => boo || w.toString().includes(q.toLowerCase()),
              false,
            ),
        ),
      })),
    );
  };

  resetSearch = _ => {
    this.setState({ query: '' });
    this.filterLists({ target: { value: '' } });
  };

  render() {
    return (
      <form className="SearchJobs" onSubmit={e => e.preventDefault()}>
        <FormGroup controlId="formControlsQueryJobs">
          <FormControl
            type="text"
            value={this.state.query}
            placeholder="search jobs"
            onChange={e => this.handleChange(e)}
            onBlur={_ => this.resetSearch()}
          />
        </FormGroup>
      </form>
    );
  }
}
