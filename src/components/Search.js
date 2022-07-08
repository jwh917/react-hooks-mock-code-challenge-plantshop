import React from "react";

function Search({searchHandle}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={searchHandle}
      />
    </div>
  );
}

export default Search;
