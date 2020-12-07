import React from "react";

import "./searchBar.scss";
import searchIcon from "../../assets/images/search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        placeholder="Search Github"
        type="text"
        name="search"
        // onChange={filterPokemons}
      />
      <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
  );
};

export default SearchBar;
