const db = require("../connection");

const findCustomerInfo = () => {
  return db.query("SELECT * FROM customers;").then((data) => {
    return data.rows;
  });
};

module.exports = { findCustomerInfo };
