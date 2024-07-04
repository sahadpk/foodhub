import React, { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import ShimmerUi from "./Shimmer";
// import { RestaurentLists } from "../config";
import { json } from "react-router-dom";
import { filterData } from "../utils/Filter";
import useOnline from "../utils/useOnline";





const Body = ({user}) => {
  const [allRestaurants, setAllRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  // console.log(allRestaurants)
 
  useEffect(() => {
    getRestaurent();
  }, []);

  async function getRestaurent() {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();

    setAllRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        //  RestaurentLists
    );
    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        //  RestaurentLists
         
    );
  }
 
  const isOnline= useOnline();

  if(!isOnline){
    return <h1>!Please check you Internet connetion</h1>
  }
  


  if (allRestaurants?.length == 0) {
   
    return <ShimmerUi />;
  }
  if (filteredRestaurent?.length === 0)
    return <h1>No Restaurant Matches on your Search</h1>;

  return (
    <React.Fragment>
      <div className="search-container p-5 bg-pink-50 my-2">
        <input
          type="text"
          className="focus:bg-green-100 m-2 p-2"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-500 hover:bg-gray-500 text-white rounded-md"
          onClick={(e) => {
            const info = filterData(allRestaurants,searchInput);
            setFilteredRestaurent(info);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurent?.map((RestaurentList) => {
          return <RestaurantCards {...RestaurentList.info} user={user} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default Body;
