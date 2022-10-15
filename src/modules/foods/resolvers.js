const model = require("./model");

module.exports = {
  Query: {
    foods: async () => {
      return await model.getFoods();
    },
    food: async (_, { id }) => {
      return await model.getFood(id);
    },
  },
  Mutation: {
    deleteFood: async (_, { id }) => {
      if (id) {
        id -= 0;
        console.log(id);
        const [data] = await model.deleteFood(id);
        return data;
      } else {
        return null;
      }
    },
    insertFood: async (_, { name, img, price, shop_id }) => {
      console.log(name, img, price, shop_id);
      if (name && img && price && shop_id) {
        const [data] = await model.insertFood(name, img, price, shop_id);
        return data;
      } else {
        return null;
      }
    },
  },
  Food: {
    id: (global) => global.food_id,
    name: (global) => global.food_name,
    img: (global) => global.food_img,
    price: (global) => global.food_price,
  },
};
