const router = require("express").Router();
const {getUsers, getUser} = require("../../controllers/userControllers");

router.route("/").get(getUsers);
router.route("/:id").get(getUser);

module.exports = router;