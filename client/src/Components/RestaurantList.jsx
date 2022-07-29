import React from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  return (
    <div className="mt-4">
      <table className="divide-y divide-gray-300 mx-auto">
        <thead className="bg-gray-50 text-3xl font-bold">
          <tr>
            <th className="px-6 py-2 text-gray-500">Restaurant</th>
            <th className="px-6 py-2 text-gray-500">Location</th>
            <th className="px-6 py-2 text-gray-500">Price</th>
            <th className="px-6 py-2 text-gray-500">Rating</th>
            <th className="px-6 py-2 text-gray-500">Edit</th>
            <th className="px-6 py-2 text-gray-500">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-xl">
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4">
              McDonalds
            </td>
            <td className="px-6 py-4">
              West Ave.
            </td>
            <td className="px-6 py-4  text-gray-500">
              $$$$
            </td>
            <td className="px-6 py-4  text-gray-500">
              5-Star
            </td>
            <td className="px-6 py-4  text-gray-500">
            <Link
              to={`/restaurants/:id/update`}
              className="px-4 py-2  text-blue-600 bg-blue-200 rounded-full"
            >
              Update
            </Link>
            </td>
            <td className="px-6 py-4  text-gray-500">
            <Link
              to={`/restaurants/:id/update`}
              className="px-4 py-2  text-black bg-red-600 rounded-full"
            >
              Delete
            </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
