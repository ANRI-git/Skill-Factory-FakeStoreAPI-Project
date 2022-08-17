const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let getAllCarts = () => {
  return fetch("https://fakestoreapi.com/carts").then((res) => res.json());
};

let getSingleCart = (id) => {
  return fetch(`https://fakestoreapi.com/carts/${id}`).then((res) => res.json());
};

let getCartsInDateRange = (start, end) => {
  return fetch(
    `https://fakestoreapi.com/carts/startdate=${start}&enddate=${end}`
  ).then((res) => res.json());
};

let getUserCarts = (userId) => {
  return fetch(`https://fakestoreapi.com/carts/user/${userId}`).then((res) => res.json());
};

let cart = {
  getAllCarts,
  getSingleCart,
  getCartsInDateRange,
  getUserCarts,
};

module.exports = cart;
