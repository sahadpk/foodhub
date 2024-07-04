import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUi from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


function RestaurantDetails() {
  const { resId } = useParams();


  // const [restaurant, setRestaurant] = useState(null);
  // const [resdetails,setResDetails] = useState();

 

  const {restaurant:resdetails,restaurantMenu} = useRestaurant(resId)

  
 const dispatch = useDispatch() ;
 const addFoodItem =(item) => {
   dispatch(addItem(item));
 }
  
 console.log(restaurantMenu)

  return !resdetails || !restaurantMenu ? (
    <ShimmerUi />
  ) : (
    <div className="flex">
      <div className="w-56 h-56">
        
        <h2>{resdetails.name}</h2>
        <img src={IMG_CDN_URL + resdetails.cloudinaryImageId} alt="" />
        <h3>{resdetails.locality}</h3>
        <h3>{resdetails.areaName}</h3>
        <h3>{resdetails.city}</h3>
        <h3>{resdetails.avgRating} stars</h3>
        <h3>{resdetails.costForTwoMessage} </h3>
      </div>
      <div className="p-5">
      <h1>Menu</h1>
      
      <div>
        {restaurantMenu.map((menuitem)=>{
          return (
            <div>
            
            <ul  className="">
            
            <li>{menuitem.card.info.name}- <button className="p-1 bg-green-50" onClick={()=>addFoodItem(menuitem.card.info)}>Add</button></li>
            
            </ul>
            
            </div>
          )
        })}
      </div>
      
      </div>
    </div>
  );
}

export default RestaurantDetails;
