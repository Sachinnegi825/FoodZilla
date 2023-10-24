import React,{ useState} from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import {Footer} from "./components/footer";
import Body from "../src/components/Body";
import About from "./components/About";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

import UserContext from "./utils/UserContext";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Contact from "./components/Contactpage";


const AppLayout=()=>{
    const [user,setUser]=useState({
        name:"Sachin",
        email:"sachin@gmail.com"
    })

    return (window.location.pathname !== '/login')?(
        <Provider store={store}>
        <UserContext.Provider value={{User:user}}>
        <Header/>
         <Outlet/> 
         <Footer/>
        </UserContext.Provider>
         
        </Provider>
    ):
    (
        <>
        <UserContext.Provider value={{User:user}}>
     
         <Outlet/> 
         
        </UserContext.Provider>
         
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error />,
    }
]);

export default appRouter;
