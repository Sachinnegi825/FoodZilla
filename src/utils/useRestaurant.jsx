import { useEffect, useState } from "react"
const useRestaurant=(id)=>{
    
    const [RestaurantDetails,setRestaurantDetail]=useState([]);

    useEffect(()=>{
        getRestaurantsInfo();
    },[])

    async function getRestaurantsInfo(){
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7453938&lng=77.1934466&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const json=await data.json();
        
        // setRestaurantDetail(json?.data?.cards[0]?.card?.card?.info);
        // setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

        setRestaurantDetail(json?.data?.cards);
        
       
       
    }
    return RestaurantDetails;

}

export default useRestaurant;