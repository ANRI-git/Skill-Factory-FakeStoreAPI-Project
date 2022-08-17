const express = require("express");
const router = express.Router();
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");
const userController = require("./controllers/userController");
const dates = require("./middlewares/dates");
const errorHandler = require("./middlewares/errorHandler");

function welcome(req, res) {
    res.send(`Hello! This is the Fake API App!`);
  }

router.get("/",dates.getDateFormat, welcome);
router.get("/products", dates.getDateFormat, productController.getAllProducts);
router.get("/products/category/:category", dates.getDateFormat, productController.getProductsByCategory);
router.get("/products/categories", dates.getDateFormat, productController.getProductsByCategories);
router.get("/products/:id", dates.getDateFormat, productController.getSingleProduct);
router.get("/prices/:order", dates.getDateFormat, productController.getPrices);
router.get("/expensive", dates.getDateFormat, productController.getExpensiveProducts);

router.get("/carts", dates.getDateFormat, cartController.getAllCarts);
router.get("/carts/user/:userId", dates.getDateFormat, cartController.getUserCarts);
router.get("/carts/:start/:end", dates.getDateFormat, cartController.getCartsInDateRange);
router.get("/carts/:id", dates.getDateFormat, cartController.getSingleCart);
router.get("/bigcarts", dates.getDateFormat, cartController.getBigCarts);

router.get("/users", dates.getDateFormat, userController.getAllUsers);
router.get("/users/firsts", dates.getDateFormat, userController.getFirsts);
router.get("/users/:id", dates.getDateFormat, userController.getSingleUser);

router.use(errorHandler.notFound);

module.exports = router;
