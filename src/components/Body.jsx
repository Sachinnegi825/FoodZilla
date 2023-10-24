import { RestaurantCard } from "./RestaurantCard";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { Carasoul } from "./Carasoul";



const FilterData=(Input,restaurants)=>{
    const data=restaurants.filter((restaurant)=>
       restaurant?.info?.name?.toLowerCase()?.includes(Input.toLowerCase())
    )
    return data;
}

const Body=()=>{

    const [SearchInput,setSearchInput]=useState("");
    const [Restaurants,setRestaurants]=useState([]);
    const [FilteredRestaurants,setFilteredRestaurants]= useState([]);
    const [carasoul,setCarasoul]=useState([]);
   

   useEffect(()=>{
    getRestaurants();
    console.log(Restaurants)
  },[])

   async function getRestaurants(){
        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7453938&lng=77.1934466&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json=await data.json();
       // setRestaurants(json.data.cards[2].data.data.cards);                     // <------------Wrong way of Doing

        //Use Optional chaining
        setRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCarasoul(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
       
        
   }

   const Online=useOnline();

if(!Online){
    return <h1>You are offline ,Please check your internet connections</h1>
}
   //not render component(early return)
    if(!Restaurants) return <Shimmer/>;

    return  Restaurants.length===0?(<Shimmer/>):(
        <>

        <div className="relative top-20 w-full">
         
        <h1 className="font-bold text-3xl mt-10 ml-10">Best Offers For You</h1>
        
        <div className="w-[90%] m-auto">
       
        <div className="flex transition ease-out duration-75" >
           
           {
             carasoul.map((item,i)=>{
                 return <Carasoul {...item} key={i}/>
             })
           }
           
           </div>
          
           
        
        </div>
        
        
        
         
          

        <div className="m-5 text-center bg-cyan-950 h-20">
            <input
            type="text"
            className="mr-2 p-2 w-96 mt-5"
            placeholder="Search for your favourite meal....."
            value={SearchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
            />
            <button  className="bg-orange-400 text-white p-2 text-base rounded-xl hover:bg-white hover:text-orange-600"

            onClick={()=>{
                const data=FilterData(SearchInput,Restaurants);
                setFilteredRestaurants(data);
            }}
            >
            Search</button>

        </div>
        <div className="flex flex-wrap justify-center bg-gray-200">

        {FilteredRestaurants?.length===0?<h1>No restaurant is Found!!!!!!!!</h1>:
          
            
        FilteredRestaurants.map((restaurant)=>{
            return <Link 
            to={"/restaurants/" + restaurant?.info.id} 
            key={restaurant?.info.id}>
                <RestaurantCard {...restaurant?.info} {...restaurant?.info?.aggregatedDiscountInfoV3}/>
                </Link>
                }
            )
        };
        </div>
        </div>
        
        </>
    );
}

export default Body;