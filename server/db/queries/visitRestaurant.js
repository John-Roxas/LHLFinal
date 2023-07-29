const visitRestaurant = () => {
  return `SELECT * FROM food_items WHERE restaurants_id = $1`;
};

module.exports = { visitRestaurant };
