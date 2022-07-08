const router = require("express").Router();
const userRoutes = require("./userRoutes");
const restaurantRoutes = require("./restaurantRoutes")

router.use("/user", userRoutes);
router.use("/restaurant", restaurantRoutes);

module.exports = router;