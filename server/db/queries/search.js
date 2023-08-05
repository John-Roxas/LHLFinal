const db = require("../connection");

const getRestaurants = (mode, searchTerm) => {
  // Base query string
  let queryString = "";
  
  // Query for searching by food item name
  if (mode == "name") {
    queryString += `
      SELECT *, restaurants_id as restaurantId FROM food_items
      WHERE food_name ILIKE $1;
    `
  } else if (mode == "category") {
    // Query mode for searching by category
    queryString += `
    SELECT * FROM restaurants
    WHERE category ILIKE $1;`
  } else {
    // Default query mode, 
    queryString += `
    SELECT * FROM restaurants
    WHERE restaurant_name ILIKE $1`
  }

  const values = [`%${searchTerm}%` || '%%']

  return db
    .query(queryString, values)
    .then((data) => {
    return data.rows;
  });
};

module.exports = { getRestaurants };


/*
  Previous query to return restaurants

  SELECT DISTINCT restaurants.* FROM restaurants
  JOIN food_items ON food_items.restaurants_id = restaurants.id
  WHERE food_name ILIKE $1
  ORDER BY restaurants.id;
*/