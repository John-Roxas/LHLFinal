const db = require("../connection");

const getOrderHistory = function (customerID) {
  const queryString = `
  SELECT date ,orders.id AS orders_id ,food_name, food_items_quantity, food_items_price
  FROM orders
  JOIN restaurants ON orders.restaurants_id = restaurants.id
  WHERE orders.customers_id = 1
  ORDER BY orders.date DESC, restaurants.restaurant_name;
  `;
  // const queryString = `
  // SELECT food_name, food_items_quantity, food_items_price
  // FROM orders
  // JOIN restaurants ON orders.restaurants_id = restaurants.id
  // WHERE orders.customers_id = $1
  // ORDER BY orders.date DESC, restaurants.restaurant_name;
  // `;
  const values = [customerID];

  return db
    .query(queryString)
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length === 0) {
        return null;
      } else {
        return result.rows;
      }
    })
    .catch((error) => console.log(error));
};

module.exports = { getOrderHistory };
