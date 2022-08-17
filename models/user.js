const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let getAllUsers = () => {
  return fetch("https://fakestoreapi.com/users").then((res) => res.json());
};

let getSingleUser = (id) => {
  return fetch(`https://fakestoreapi.com/users/${id}`).then((res) => res.json());
};

let user = {
  getAllUsers,
  getSingleUser,
};

module.exports = user;
