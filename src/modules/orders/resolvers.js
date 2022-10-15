const model = require("./model");

module.exports = {
  Query: {
    orders: async () => {
      return await model.getOrders();
    },
  },
  Mutation: {
    newOrder: async (_, { name, number, address, products }) => {
      const [order] = await model.insertOrder(name, number, address, products);
      return order;
    },
    deleteOrder: async (_, { id }) => {
      console.log(id);
      if (id) {
        const [data] = await model.deleteOrder(id);
        return data;
      } else {
        return null;
      }
    },
  },
  Order: {
    id: (global) => global.order_id,
    name: (global) => global.order_client_full_name,
    number: (global) => global.order_client_number,
    address: (global) => global.order_client_address,
    products: (global) => global.order_products,
    time: (global) => global.order_time,
  },
};
