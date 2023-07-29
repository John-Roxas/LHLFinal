const getFood = () => {
  return `SELECT * FROM food_items WHERE restaurants_id = $1 AND id = $2`;
};

module.exports = { getFood };
