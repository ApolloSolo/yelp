const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
  addRestaurant,
} = require("../../controllers/restaurantColtrollers");

router.route("/").get(getRestaurants);
router.route("/:id").get(getRestaurant);
router.route("/addRestaurant").post(addRestaurant);

module.exports = router;
