
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
          <h1 className="font-bold text-2xl">About app</h1>
          <h3 className="font-bold">Welcome To FoodZone</h3>
          <span>The application showcases a list of restaurants and allows users to navigate to each restaurant's menu seamlessly. It includes robust cart functionality and an informative about page. This project was developed using React.js, React Redux, JavaScript, and Tailwind CSS. Additionally, I integrated an API from the Swiggy app to display an extensive list of restaurants. I look forward to your feedback and further discussions on this project
          </span>
          <h3 className="font-bold">About Me</h3>
          <span>Self-taught MERN stack developer skilled in building web applications and services. Proficient in development
          and deployment processes, with a passion for learning new technologies. Specialized in React.js, delivering
          intuitive user interfaces. Eager to contribute expertise to dynamic projects and advance career in software
          development.
          </span>
          
          </div>
         
           
         
         
         </div>
      );
   }
}

 export default About