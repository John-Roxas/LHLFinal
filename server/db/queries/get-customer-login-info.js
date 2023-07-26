const db = require("../connection");

//Get user with cookie session id

const getCustomerLoginInfo = function (username) {
  const queryString = `
  SELECT *
  FROM customers
  WHERE customer_email = $1;`;
  const values = [username];

  return db
    .query(queryString, values)
    .then((result) => {
      if (result.rows.length === 0) {
        return null;
      } else {
        return result.rows[0];
      }
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getCustomerLoginInfo,
};
