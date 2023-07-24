const db = require("../connection");

//Get user with cookie session id

const getUserWithCookieId = function (id) {
  const queryString = `
  SELECT *
  FROM customers
  WHERE id = $1`;
  const values = [id];

  return db
    .query(queryString, values)
    .then((result) => {
      if (result.rows) {
        return result.rows[0];
      } else {
        return null;
      }
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getUserWithCookieId,
};
