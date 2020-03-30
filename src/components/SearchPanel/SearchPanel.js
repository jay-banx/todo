import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = event => {
    const searchText = event.target.value.trimLeft();
    this.setState({ searchText });
    this.props.onSearch(searchText);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Type to search"
        className="form-control search-input"
        value={this.state.searchText}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchPanel;
