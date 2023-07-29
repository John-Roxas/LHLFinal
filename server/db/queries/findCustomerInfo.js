const db = require("../connection");

const findCustomerInfo = (customerId) => {
  // console.log(customerId)
  return `SELECT * FROM customers WHERE id = $1`;
};

module.exports =  findCustomerInfo ;
