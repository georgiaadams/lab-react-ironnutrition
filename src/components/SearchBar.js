import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: '',
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state; //get search string
    this.props.filterFoods(search); //filter foods using search string
    // reset form
    this.setState({ search: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            style={{ border: '2px solid black', width: '400px' }}
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
