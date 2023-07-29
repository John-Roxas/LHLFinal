const getRestaurantList = function () {
  return `SELECT * FROM restaurants;`;
};

module.exports = { getRestaurantList };
