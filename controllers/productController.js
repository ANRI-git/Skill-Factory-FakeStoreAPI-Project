const products = require("../models/product");

const getAllProducts = async (req, res) => {
  let allProducts = await products.getAllProducts();
  res.status(200).send(allProducts);
};

const getSingleProduct = async (req, res) => {
  let singleProduct = await products.getSingleProduct(req.params.id);
  res.status(200).send(singleProduct);
};

const getProductsByCategory = async (req, res) => {
  let productsByCategory = await products.getProductsByCategory(
    req.params.category
  );
  res.status(200).send(productsByCategory);
};

const getProductsByCategories = async (req, res) => {
  let categories = await products.getCategories();
  let productsByCategories = categories.map(async (category) => {
    return {
      category,
      products: await products.getProductsByCategory(category),
    };
  });
  Promise.all(productsByCategories).then((data) => res.status(200).send(data));
};

const getExpensiveProducts = async (req, res) => {
  let categories = await products.getCategories();
  let expensiveProducts = categories.map(async (category) => {
    let productsByCategories = await products.getProductsByCategory(category);
    productsByCategories.sort((a, b) => b.price - a.price);
    return productsByCategories[0];
  });
  Promise.all(expensiveProducts).then((data) => res.status(200).send(data));
};

const getPrices = async (req, res) => {
  let allProducts = await products.getSortedProducts(req.params.order.toLowerCase());
  let sortedProducts = allProducts.map((product) => {
    return {
      id: product.id,
      price: product.price,
      title: product.title,
    };
  });
  res.status(200).send(sortedProducts);
};

let productController = {
  getAllProducts,
  getSingleProduct,
  getProductsByCategories,
  getProductsByCategory,
  getExpensiveProducts,
  getPrices,
};

module.exports = productController;
