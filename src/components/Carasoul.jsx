import {IMG_CDN_URL} from "../utils/constants";

export const Carasoul=({imageId})=>{
    return (
        <div className="w-[25rem] text-center m-5 my-10 h-80">
            <img className="rounded-xl" src={IMG_CDN_URL + imageId} alt="img" />
            
           
            
        </div>
    )
}
