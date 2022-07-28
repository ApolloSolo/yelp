const db = require("../db");

const restaurantControllers = {
  async getRestaurants(req, res) {
    const restaurants = await db.query("SELECT * FROM restaurants");
    res.status(200).json(restaurants.rows);
  },

  async getRestaurant(req, res) {
    const { id } = req.params;
    const restaurant = await db.query(
      "SELECT * FROM restaurants WHERE id = $1",
      [id]
    );
    res.status(200).json(restaurant.rows);
  },

  async addRestaurant(req, res) {
    const { name, location, price_range } = req.body;
    const newRest = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3)",
      [name, location, price_range]
    );
    res.status(200).json(newRest.rows);
  },

  async updateRestaurant(req, res) {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    const updatedRest = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4",
      [name, location, price_range, id]
    );
    res.status(200).json(updatedRest.rows);
  },

  async deleteRestaurant(req, res) {
    const { id } = req.params;
    const deletedRest = await db.query("DELETE FROM restaurants WHERE id = ($1)", [id]);
    res.status(204).json(deletedRest.rows);
  },
};

module.exports = restaurantControllers;
