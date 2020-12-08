import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../services/userService";

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
  useEffect(() => {
    if (username !== "") {
      getUser(username).then((result) => {
        console.log(result);
        if (result[0].error) {
          setUsername("User not found");
          return setUser(initialUser);
        }
        setUser(result[0]);
      });
    } else {
      setUser(initialUser);
    }
  }, [username]);
  return (
    <div className="details-container mg-tp-4">
      <h1>{username}</h1>
      <div className="details-list">
        {Object.keys(user).map((field, key) => (
          <div key={key} className="details-list-item ">
            <div>{field} : </div>
            <div> {user[field]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
