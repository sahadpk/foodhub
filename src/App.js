import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import InstaMart from "./Components/InstaMart";
import ErrorPage from "./Components/ErrorPage";
import RestaurantDetails from "./Components/RestaurantDetails";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./Components/Cart";

const AppLayout = () => {

  const [user,setUser]=useState({
     name:"sahad",
     email:"sahadsha343@gmail.com",
     mobile:"+971 564676897"
  });

 


  return (
    <React.Fragment>
    <Provider store={store}>
    <UserContext.Provider 
    value={{
      user:user,
      setUser:setUser,
    }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body 
      
        
        />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path:"profile",
          element:<Profile/>
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <InstaMart/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
         path: "/restaurant/:resId",
         element: <RestaurantDetails />,
       },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
