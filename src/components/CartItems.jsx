import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItem=({name,imageId,price,defaultPrice,id})=>{

  const dispatch=useDispatch();
  const URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  
  const RemoveItem=()=>{
         dispatch(removeItem(id));
  }

    return (
        <div className=" text-center w-[80%] my-10 flex flex-col sm:flex-row justify-between items-center border-2">
           <img src={URL + imageId} alt="" className="w-32" />
           <h3 className="font-bold text-2xl sm:w-96">{name}</h3>
          <h3>Rs.{price?price/100:defaultPrice/100}</h3>
          <button className="ml-10" onClick={()=>RemoveItem()}>➖</button>
        
          
        </div>
    )
}

export default CartItem;