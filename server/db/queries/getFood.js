const getFood = () => {
  return `SELECT food_items.*, restaurants.restaurant_name as "restaurantName"
  FROM food_items JOIN restaurants ON food_items.restaurants_id = restaurants.id
  WHERE restaurants_id = $1 AND food_items.id = $2`;
};

module.exports = { getFood };
