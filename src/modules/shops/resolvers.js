const model = require("./model");

module.exports = {
  Query: {
    shops: async () => {
      return await model.getShops();
    },
    shop: async (_, { id }) => {
      return await model.getShop(id);
    },
  },
  Mutation: {
    deleteShop: async (_, { id }) => {
      console.log(id);
      if (id) {
        const [data] = await model.deleteShop(id);
        return data;
      } else {
        return null;
      }
    },
    insertShop: async (_, { name, img, category_id }) => {
      console.log(name, img, category_id);
      if (name && img && category_id) {
        const [data] = await model.insertShop(name, img, category_id);
        return data;
      } else {
        return null;
      }
    },
  },
  Shop: {
    id: (global) => global.shop_id,
    name: (global) => global.shop_name,
    img: (global) => global.shop_img,
  },
};
