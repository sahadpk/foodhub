import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";



const Title =()=>(
    <a href="/">
    <img
    alt=""
    className="h-28 p-2"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyPkW3ZJuohu1WHo54kdmGBH3Vi3s-rE0gQ&s"/>
    </a>
 );

 const Header = () => {

    const[isLoggedIn,setLoggedIn]=useState(false)
  


const isOnline = useOnline()

const {user} = useContext(UserContext)

const cartItems =useSelector(store=>store.cart.items)

 return (
 <div className="flex justify-between bg-green-100 shadow-lg">
 <Title/>
  <div className="nav-items">
  <ul className="flex py-10">
  
  <Link to="/"><li className="px-2">Home</li></Link>
  <Link to="/about"><li className="px-2">About</li></Link>
  <Link to="/contact"><li className="px-2">Contact</li></Link>
  <Link to="/instamart"><li className="px-2">Instamart</li></Link>
  <Link to="/cart"><li className="px-2">Cart-{cartItems.length} items</li></Link>
  
  </ul>
  </div>
  <h1>{isOnline? '✅' : '🔴'}</h1>

  <h1 className="p-10 font-bold text-red-600">{user.name}</h1>
  {isLoggedIn ? <button className="login-btn" onClick={()=>setLoggedIn(false)}>Logout</button> :
   <button className="login-btn" onClick={()=>setLoggedIn(true)}>Login</button>}
 </div>
 );
};
export default Header