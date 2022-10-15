const { fetchData } = require("../../utils/postgres");

const FOODS = `
    SELECT * FROM foods
`;
const FOOD = `
    SELECT * FROM foods WHERE shop_id = $1
`;

const DELETE_FOOD = `
  DELETE FROM
    foods
  WHERE
    food_id = $1
  RETURNING *
`;

const NEW_FOOD = `
  INSERT INTO
    foods(food_name, food_img, food_price, shop_id)
  VALUES($1, $2, $3, $4)
  RETURNING *
`;

const getFoods = () => fetchData(FOODS);
const getFood = (id) => fetchData(FOOD, id);
const deleteFood = (id) => fetchData(DELETE_FOOD, id);
const insertFood = (name, img, price, shop_id) =>
  fetchData(NEW_FOOD, name, img, price, shop_id);

module.exports = {
  getFood,
  getFoods,
  deleteFood,
  insertFood,
};
