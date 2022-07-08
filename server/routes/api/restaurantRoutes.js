const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
} = require("../../controllers/restaurantColtrollers");

router.route('/').get(getRestaurants);
router.route('/:id').get(getRestaurant);

module.exports = router;