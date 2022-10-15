const { fetchData } = require("../../utils/postgres");

const CATEGORIES = `
    SELECT * FROM categories
`;

const getCategories = () => fetchData(CATEGORIES);

module.exports = { getCategories };
