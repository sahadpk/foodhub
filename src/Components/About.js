
// import ProfileClass from "./ProfileClass";
import React from "react";
// import UserContext from "../utils/userContext";


class About extends React.Component{
  
   
   render(){
      return (
         <div className="flex p-5 m-5">
          <div className="">
           <img className="p-5 m-5" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className="w-1/2 p-4  ">
          <h1 className="font-bold text-2xl">About Us</h1>
          <h3 className="font-bold">Welcome To FoodZone</h3>
          <span>At Foodzone, we're passionate about bringing delicious food from your favorite local restaurants straight to your doorstep. Our mission is to make dining easier, faster, and more enjoyable for everyone.
          </span>
          <h3 className="font-bold">Who We Are</h3>
          <span>Founded in 2024, FoodZone started with a simple idea: to create a seamless connection between food lovers and the best local eateries. With a dedicated team of food enthusiasts and tech experts, we've built a platform that simplifies the entire food ordering process.</span>
          <h3 className="font-bold">Our Mission</h3>
          <span>We aim to provide a diverse selection of cuisines and dishes, catering to every taste and preference. Whether you're craving a gourmet meal, a quick snack, or something healthy, we've got you covered. Our goal is to ensure that every meal ordered through our app is a delightful experience.</span>
          </div>
         
           
         
         
         </div>
      );
   }
}

 export default About