import React from "react";
import "./SearchPanel.css";

const SearchPanel = ({ searchText, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="form-control search-input"
      value={searchText}
      onChange={event => onSearch(event.target.value)}
    />
  );
};

export default SearchPanel;
