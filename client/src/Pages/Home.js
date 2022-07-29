import React from "react";
import Header from "../Components/Header";
import AddRestaurants from "../Components/AddRestaurants";
import RestaurantList from "../Components/RestaurantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurants />
      <RestaurantList />
    </div>
  );
};

export default Home;
