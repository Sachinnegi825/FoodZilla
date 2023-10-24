import {IMG_CDN_URL} from "../utils/constants";

export const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRating,areaName,header,subHeader})=>{
    return (
        <div className="w-80 text-center m-5 my-10 hover:scale-90 transition-all duration-500 relative">
            <img className="rounded-xl" src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
            <h2 className="absolute top-[170px] text-white text-2xl left-12 bg-slate-900 text-bold">{header} {subHeader}</h2>
            <h2 className="font-bold text-2xl">{name}</h2>
            <h2>{avgRating}⭐</h2>
            <h3 className="h-6 overflow-hidden">{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
           
            
        </div>
    )
}
