const db = require("../connection");

const getOrderHistory = function (customerID) {
  // const queryString = `
  // SELECT
  //   orders.id AS order_id,
  //   restaurants.restaurant_name,
  //   cart_items.food_name AS cart_item_name,
  //   cart_items.quantity AS cart_item_quantity,
  //   cart_items.food_item_price AS cart_item_price,
  //   cart_items.quantity * cart_items.food_item_price AS total_item_cost,
  //   SUM(cart_items.quantity * cart_items.food_item_price) OVER(PARTITION BY orders.id) AS order_total
  // FROM
  //     orders
  // JOIN
  //     restaurants  ON orders.restaurants_id = restaurants.id
  // JOIN
  //     carts  ON orders.cart_id = carts.id
  // JOIN
  //     cart_items  ON carts.id = cart_items.cart_id
  // WHERE
  //     carts.customers_id = $1;
  // `;

  const queryString = `
  SELECT
  restaurants.restaurant_picture,
  restaurants.restaurant_name,
  orders.id AS order_id,
  orders.total_amount
  FROM
    orders
  JOIN
    restaurants ON orders.restaurants_id = restaurants.id
  WHERE
    orders.customers_id = $1
  ORDER BY orders.id;
  `;

  const values = [customerID];

  return db
    .query(queryString, values)
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
