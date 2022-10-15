const model = require("./model");

module.exports = {
  Query: {
    categories: async () => {
      return await model.getCategories();
    },
  },
  Category: {
    id: (global) => global.category_id,
    name: (global) => global.category_name,
    img: (global) => global.category_img,
  },
};
