const { sign } = require("../../utils/jwt");

module.exports = {
  Query: {
    access_token: (_, { username, password }, {}) => {
      try {
        if (password === process.env.PASSWORD) {
          const token = sign({ username, password });
          return token;
        } else {
          return null;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
