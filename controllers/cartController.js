const carts = require("../models/cart");

const getAllCarts = async (req, res) => {
  let allCarts = await carts.getAllCarts();
  res.status(200).send(allCarts);
};

const getSingleCart = async (req, res) => {
  let singleCart = await carts.getSingleCart(req.params.id);
  res.status(200).send(singleCart);
};

const getCartsInDateRange = async (req, res) => {
  let carts = await carts.getCartsInDateRange(req.params.start, req.params.end);
  res.status(200).send(carts);
};

const getUserCarts = async (req, res) => {
  let userCarts = await carts.getUserCarts(req.params.userId);
  res.status(200).send(userCarts);
};

const getBigCarts = async () => {
  let allCarts = await carts.getAllCarts();
  allBigCarts = allCarts.map((cart) => {
    if (cart.products.length > 2) {
      return {
        userId: cart.userId,
        products: cart.products,
      };
    }
  });
  res.status(200).send(allBigCarts);
};

let cartController = {
  getAllCarts,
  getSingleCart,
  getCartsInDateRange,
  getUserCarts,
  getBigCarts,
};

module.exports = cartController;
