import React from "react";

const AddRestaurants = () => {
  return (
    <div>
      <form>
        <div className="flex items-baseline">
          <div className="w-full mx-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-indigo-50 py-4 outline-none rounded-md w-full pl-4"
            />
          </div>
          <div className="w-full mx-4">
            <input
              type="text"
              placeholder="Location"
              className="bg-indigo-50 pl-4 py-4 outline-none rounded-md w-full"
            />
          </div>

          <div className="w-full mx-4">
            <select className="bg-indigo-50 py-4 outline-none rounded-md w-full pl-4">
              <option>Price Range</option>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
              <option value={5}>$$$$$</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-full mx-4 bg-[#337499]  py-2 text-indigo-100 hover:bg-[#4f90b6] rounded-md text-lg tracking-wide hover:shadow-lg duration-75"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
