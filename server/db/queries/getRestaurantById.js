const db = require("../connection");

const getRestaurantById = (id) => {
  const queryString = `
  SELECT * FROM restaurants
  WHERE id = $1`

  const values = [id]

  return db
    .query(queryString, values)
    .then((data) => {
      return data.rows;
    });
};

module.exports = { getRestaurantById };