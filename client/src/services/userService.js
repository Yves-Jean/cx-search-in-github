const url = process.env.REACT_APP_SEARCH_IN_GITHUB_API;

const getUser = (username) => {
  return fetch(`${url}/users/${username}`).then((res) => res.json());
};

module.exports = {
  getUser,
};
