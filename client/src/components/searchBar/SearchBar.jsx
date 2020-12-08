import React, { useContext, useState } from "react";

import "./searchBar.scss";
import searchIcon from "../../assets/images/search.svg";
import { UserContext } from "../../contexts/UserContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useContext(UserContext);
  const searchUser = () => {
    setUsername(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        placeholder="Search Github"
        type="text"
        name="search"
        onChange={handleChange}
        value={search}
      />
      <span onClick={searchUser}>
        <img src={searchIcon} alt="Search" className="search-icon" />
      </span>
    </div>
  );
};

export default SearchBar;
