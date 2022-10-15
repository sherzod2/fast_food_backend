const { fetchData } = require("../../utils/postgres");

const SHOPS = `
    SELECT * FROM shops
`;

const SHOP = `
  SELECT * FROM shops WHERE category_id = $1
`;

const DELETE_SHOP = `
  DELETE FROM
    shops
  WHERE
    shop_id = $1
  RETURNING *
`;

const NEW_SHOP = `
  INSERT INTO
    shops(shop_name, shop_img, category_id)
  VALUES($1, $2, $3)
  RETURNING *
`;

const getShops = () => fetchData(SHOPS);
const getShop = (id) => fetchData(SHOP, id);
const deleteShop = (id) => fetchData(DELETE_SHOP, id);
const insertShop = (name, img, category_id) =>
  fetchData(NEW_SHOP, name, img, category_id);

module.exports = {
  getShops,
  getShop,
  deleteShop,
  insertShop,
};
