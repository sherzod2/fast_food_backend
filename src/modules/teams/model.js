const { fetchData } = require("../../utils/postgres");

const TEAMS = `
    select * from teams
`;

const USER = `
  select * from users where username = $1 and user_password = $2
`;

const getTeams = () => fetchData(TEAMS);
const getUser = (name, password) => fetchData(USER, name, password);

module.exports = {
  getTeams,
  getUser,
};
