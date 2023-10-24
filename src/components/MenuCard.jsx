import { addItem } from "../utils/cartSlice";

  import { useDispatch } from "react-redux";


const MenuCard=({name,imageId,description,items,price,defaultPrice})=>{
  const cost=price?price/100:defaultPrice/100;
  const URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const dispatch=useDispatch();
  const handleAddItem=()=>{
    dispatch(addItem(items.card.info));                  //dispatch(action(payload)))
    
  }


    return (
        <div className=" text-center my-10 flex jusify-between gap-10 items-center p-4 border-2 border-gray-400">
           <img src={URL + imageId} alt="img" className="rounded-xl"/>
           <div className="w-2/3 mx-auto">
           <h3 className="font-bold text-2xl">{name}</h3>
          <h3>Rs.{cost}</h3>
          <h3 >{description}</h3>
          <button onClick={()=>handleAddItem()} className="bg-white text-green-950 text-lg p-1 w-20 mt-3 font-bold">add +</button>
           </div>
      
          
        </div>
    )
}

export default MenuCard;