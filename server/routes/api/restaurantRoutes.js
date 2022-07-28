const router = require("express").Router();
const {
  getRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../../controllers/restaurantColtrollers");

router.route("/").get(getRestaurants);
router.route("/:id").get(getRestaurant);
router.route("/add").post(addRestaurant);
router.route("/update/:id").put(updateRestaurant);
router.route("/delete/:id").delete(deleteRestaurant);

module.exports = router;
