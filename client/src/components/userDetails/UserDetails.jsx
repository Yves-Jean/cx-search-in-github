import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../services/userService";

const UserDetails = () => {
  const [username, setUsername] = useContext(UserContext);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser(username).then((result) => {
      setUser(result);
    });
  }, [username]);
  return (
    <div className="container">
      <h1>{username}</h1>
      {user.map((field, key) => (
        <div>{field}</div>
      ))}
    </div>
  );
};

export default UserDetails;
