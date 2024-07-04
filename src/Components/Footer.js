import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () =>{
  const {user}= useContext(UserContext)
    return(
      <div>
      <div className="bg-green-100 h-60 flex">
      <div>
      <ul className="w-1/4 font-bold p-28 m-5 py-6">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Instamart</li>
      <li>Policy</li>
      </ul>
      </div>
      <div>
      <ul className="w-1/4 font-bold p-28 m-5 py-6">
      <li>Privacy</li>
      <li>Terms</li>
      <li>Team</li>
      <li>Gmail</li>
      <li>Policy</li>
      </ul>
      </div>
      <div>
      <ul className="w-1/4 font-bold p-28 m-5 py-6">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Instamart</li>
      <li>Policy</li>
      </ul>
      </div>
      <div>
      <ul className="w-1/4 font-bold p-28 m-5 py-6">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Instamart</li>
      <li>Policy</li>
      </ul>
      </div>
      </div>
      <div>
      <h4 className=" bg-gray-400 text-center text-red-900">Developed and Designed by {user.name}</h4>
      </div>
      </div>
      
      
    );
 } ;
 export default Footer