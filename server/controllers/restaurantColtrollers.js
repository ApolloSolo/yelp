const restaurantControllers = {
    async getRestaurants(req, res) {
        res.send("All Restaurants")
    },

    async getRestaurant(req, res) {
        res.send("One Restaurant")
    }
}

module.exports = restaurantControllers;