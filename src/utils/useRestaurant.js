import { useState,useEffect } from "react"
import { FETCH_MENU_URL } from "../config";

const useRestaurant=(resId)=>{
  const[restaurant,setRestaurant]=useState(null)
  const[restaurantMenu,setRestaurantMenu]=useState(null)
  const[restaurantMeta,setRestaurantMeta]=useState(null)

  useEffect(()=>{
    if(restaurant){
      console.log(restaurantMeta.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
      setRestaurantMenu(restaurantMeta.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    

     console.log("menufetch")
  },[restaurant]);
  
  useEffect(() => {
    if(restaurantMeta ){
      
    setRestaurant(restaurantMeta.data.cards[2]?.card?.card?.info)
    }

    console.log("restaurantdetails")
  }, [restaurantMeta]);
  useEffect(()=>{
    getRestaurantInfo();
    console.log("restaurantmetafetch")
  },[])


  
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId );
    const json = await data.json();
    setRestaurantMeta(json)
  
    
  
  
      
   
    
   
  }


   

  return {restaurant,restaurantMenu};

}
export default useRestaurant