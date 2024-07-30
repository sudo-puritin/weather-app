import React from "react";

import iconLocation from "../Image/icons8-location-30.png";
import iconSearch from "../Image/icons8-search-50.png";

export default function SearchBox({
  searchInput,
  setSearchInput,
  handleSubmit,
}) {
  return (
    <div className="searchBox">
      <img src={iconLocation} alt="location-icon" />
      <input
        type="text"
        className="searchInput"
        placeholder="Enter your city"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="searchSubmit" onClick={handleSubmit}>
        <img src={iconSearch} alt="search-icon" width="30px" height="30px" />
      </button>
    </div>
  );
}
