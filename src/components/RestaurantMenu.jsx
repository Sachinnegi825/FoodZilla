import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { IMG_CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";



const RestaurantMenu=()=>{
    const [Menu,setMenu]=useState([]);
    const {id}=useParams();
   
    const [RestaurantDetails,setRestaurantDetail]=useState([]);
    

    useEffect(()=>{
        getRestaurantsInfo();
    },[])

    async function getRestaurantsInfo(){
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7453938&lng=77.1934466&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json=await data.json();
        
        setRestaurantDetail(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    
       
    }
  
    if(!RestaurantDetails)
    return <h1>Soory for the inconvinence .Page not found</h1>;

    return  (!Menu||Menu.length===0)?(<Shimmer/>):(
    <div className="relative top-20">
        <div className="w-80 text-center m-5 my-10 hover:scale-90 transition-all duration-500 mx-auto">
        <img className="rounded-xl" src={IMG_CDN_URL + RestaurantDetails.cloudinaryImageId} alt="" />
        <div className="flex-right">
        <h2>{RestaurantDetails.name}</h2>
          <h2>{RestaurantDetails.avgRating}⭐ [{RestaurantDetails.totalRatingsString}]</h2> 
          <h3>{RestaurantDetails.cuisines.join(", ")}</h3>
          <h3>{RestaurantDetails.locality},{RestaurantDetails.areaName},{RestaurantDetails.city}</h3>
        </div>
         

        </div>
           <div className="menu">
           <h1 className="w-32 mx-auto font-bold text-6xl first-letter:text-red-600 my-5">Menu</h1>
           </div>
          
          <div className=" bg-gray-200 w-[90%] mx-auto gap-10">
          {Menu.map((items)=>{
            return <MenuCard {...items.card.info}  items={items} key={items.card.info.id} />})
        }
          </div>
          
        
   
    </div>
   )
}

export default RestaurantMenu;