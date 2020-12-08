import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../services/userService";
import { LoadingContext } from "../loadingManager/LoadingManager";

import "./userDetails.scss";

const initialUser = {
  login: "-",
  id: 0,
  node_id: "-",
  avatar_url: "-",
  gravatar_id: "-",
  url: "-",
  html_url: "-",
  followers_url: "-",
  following_url: "-",
  gists_url: "-",
  starred_url: "-",
  subscriptions_url: "-",
  organizations_url: "-",
  repos_url: "-",
  events_url: "-",
  received_events_url: "-",
  type: "-",
  site_admin: "-",
  name: "-",
  company: "-",
  blog: "-",
  location: "-",
  email: "-",
  hireable: "-",
  bio: "-",
  twitter_username: "-",
  public_repos: "-",
  public_gists: "-",
  followers: "-",
  following: "-",
  created_at: "-",
  updated_at: "-",
};

const UserDetails = () => {
  const [username, setUsername] = useContext(UserContext);
  const [user, setUser] = useState(initialUser);
  const [, setPendingRequest] = useContext(LoadingContext);
  useEffect(() => {
    if (username !== "") {
      getUser(username).then((result) => {
        // console.log(result);
        if (result[0].error) {
          setUsername("User not found");
          setUser(initialUser);
          setPendingRequest(false);
          return;
        }
        setUser(result[0]);
        setPendingRequest(false);
      });
    } else {
      setUser(initialUser);
      setPendingRequest(false);
    }
  }, [username]);

  const displayUser = () => {
    const result = Object.keys(user).map((field, key) => (
      <div key={key} className="details-list-item ">
        <div>{field} : </div>
        <div> {user[field]}</div>
      </div>
    ));

    return result;
  };

  return (
    <div className="details-container mg-tp-4">
      <h1>{username}</h1>
      <div className="details-list">{displayUser()}</div>
    </div>
  );
};

export default UserDetails;
