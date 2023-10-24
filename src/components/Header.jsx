import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {useEffect} from "react";


const Header=()=>{  
    const [LogIn,setLogin]=useState("true");
    const {User}=useContext(UserContext); 
    
    const cartItems=useSelector(store=>store.cart.items);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
   
    return (<>
       
       <div className="flex justify-between items-center bg-white shadow-2xl h-20 shadow-slate-1000 fixed w-full top-0 z-10">
       <Link to={"/"}><h1 className="text-4xl ml-10">FOODZILLA</h1></Link>
       <div className="nav-items w-1/2 z-10 text-center">
       <ul className="flex flex-col lg:flex-row mt-72  lg:mt-0 gap-10 lg:gap-16 py-1 text-2xl child-hover:text-gray-400  child-hover:underline uppercase tracking-widest bg-white">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to={"/contact"}><li>Contact</li></Link>
        <Link to="/cart"><li className="relative">cart<span className="text-xs relative bottom-2 font-bold">{cartItems.length}</span></li></Link>
        <Link to="/login"><li className="list-none">{LogIn?"Login":User.name}</li></Link>
       </ul>
      
      </div>
      </div>
    </>
    );
}

export default Header;

