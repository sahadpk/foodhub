import { IMG_CDN_URL } from "../config"


const FoodItem=({name,description,price,imageId}) => {
    console.log(FoodItem)
    
    
    return(
       <div className="resto-card w-44 p-2 m-2 shadow-lg bg-pink-50">
       
       <img className="w-36 h-36" src={IMG_CDN_URL + imageId} /> 
       <h2 className="font-bold text-xl">{name}</h2>
       <h4 className="font-bold"> ₹{price/100}</h4>
      
        
   
       </div>
       
    )
 }
 export default FoodItem