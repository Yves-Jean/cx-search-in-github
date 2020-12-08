import React, { createContext, useContext, useState } from "react";

import "./searchBar.scss";
import searchIcon from "../../assets/images/search.svg";
import { UserContext } from "../../contexts/UserContext";

import { LoadingContext } from "../loadingManager/LoadingManager";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [, setUsername] = useContext(UserContext);
  const [, setPendingRequest] = useContext(LoadingContext);

  const [isChanged, setChange] = useState(false);

  const searchUser = () => {
    if (search !== "" && isChanged) {
      setPendingRequest(true);
      setUsername(search);
      setChange(false);
    }
  };
  const handleChange = (e) => {
    setChange(true);
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
