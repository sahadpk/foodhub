import { IMG_CDN_URL } from "../config"

const RestaurantCards=({name,id,cuisines,cloudinaryImageId}) => {
    
   
    return(
       <div className="resto-card w-44 p-2 m-2 shadow-lg bg-pink-50">
       <a href={`restaurant/${id}`}>
       <img className="w-36 h-36" src={IMG_CDN_URL + cloudinaryImageId } /> 
       <h2 className="font-bold text-xl">{name}</h2>
         <p>{cuisines.join(", ")}</p>
         
        
       </a>
     
         
       </div>
       
    )
 }
 export default RestaurantCards