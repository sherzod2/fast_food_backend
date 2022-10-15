const { fetchData } = require("../../utils/postgres");

const NEW_ORDER = `
    INSERT INTO
        orders(order_client_full_name, order_client_number, order_client_address, order_products)
    VALUES($1, $2, $3, $4)
    RETURNING *
`;

const ORDERS = `
    SELECT * FROM orders
`;

const DELETE_ORDER = `
  DELETE FROM
    orders
  WHERE
    order_id = $1
  RETURNING *
`;

const insertOrder = (name, number, address, products) =>
  fetchData(NEW_ORDER, name, number, address, products);
const getOrders = () => fetchData(ORDERS);
const deleteOrder = (id) => fetchData(DELETE_ORDER, id);

module.exports = {
  getOrders,
  insertOrder,
  deleteOrder,
};
