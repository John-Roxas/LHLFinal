const db = require("../connection");

//Get user with cookie session id

const getCustomerLoginInfo = function (username, password) {
  const queryString = `
  SELECT *
  FROM customers
  WHERE customer_email = $1 AND customer_password = $2;`;
  const values = [username, password];

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
  getCustomerLoginInfo,
};
