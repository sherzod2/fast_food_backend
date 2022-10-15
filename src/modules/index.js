// const teamsModel = require("./teams");
const scalars = require("./scalars");
const categoriesModel = require("./categories");
const shopsModel = require("./shops");
const foodModel = require("./foods");
const ordersModel = require("./orders");
const loginModel = require("./login");

module.exports = [
  categoriesModel,
  scalars,
  shopsModel,
  foodModel,
  ordersModel,
  loginModel,
];
