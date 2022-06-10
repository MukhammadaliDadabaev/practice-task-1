import React from "react";

const SearchInput = ({ searchFilter, searchInput }) => {
  return (
    <div className="tc">
      <input
        type="search"
        className="pa3 mb2 br3 out"
        placeholder="Search photos..."
        onChange={searchInput}
      />
    </div>
  );
};
export default SearchInput;
