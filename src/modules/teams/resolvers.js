const model = require("./model");
const { sign, verify } = require("../../utils/jwt");
const { AuthenticationError } = require("apollo-server-express");

module.exports = {
  Query: {
    teams: async (_, {}, { token }) => {
      try {
        const { id } = verify(token);
        if (!id) return new AuthenticationError("token xato yoki pishgan");
        return await model.getTeams();
      } catch (err) {
        console.log(err.message);
        return;
      }
    },
  },
  Team: {
    id: (global) => global.team_id,
    name: (global) => global.team_name,
  },
  Mutation: {
    login: async (_, { name, password }) => {
      const foundUser = await model.getUser(name, password);
      if (!foundUser[0]) return new AuthenticationError("PISHDING UKAM");
      return {
        status: "OK",
        token: sign({ id: foundUser[0].user_id }),
      };
    },
  },
};
