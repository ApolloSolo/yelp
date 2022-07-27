const restaurantControllers = {
    async getRestaurants(req, res) {
        res.send("All Restaurants")
    },

    async getRestaurant(req, res) {
        res.send("One Restaurant")
    },

    async addRestaurant(req, res) {
        res.send("Add a restaurant");
    }
}

module.exports = restaurantControllers;