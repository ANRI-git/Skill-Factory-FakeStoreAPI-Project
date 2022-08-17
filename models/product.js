const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

let getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

let getSingleProduct = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
};

let getCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
};

let getProductsByCategory = (category) => {
  return fetch(`https://fakestoreapi.com/products/category/${category}`).then(
    (res) => res.json()
  );
};

let getSortedProducts = (order) => {
  return fetch(`https://fakestoreapi.com/products?sort=${order}`).then((res) =>
    res.json()
  );
};

let product = {
  getAllProducts,
  getSingleProduct,
  getCategories,
  getProductsByCategory,
  getSortedProducts,
};

module.exports = product;
