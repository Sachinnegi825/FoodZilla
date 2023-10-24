import { useSelector } from "react-redux";
import CartItem from "./CartItems";
import { useState,useEffect } from "react";

const Cart = () => {
  const cartItems=useSelector(store=>store.cart.items);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      const price=cartItem.price;
      const cost=price?price/100:defaultPrice/100;
      temp = temp + parseInt(cost)
    })
    setTotalAmount(temp);
  
  }, [cartItems])

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;

  return (
    <>
       <div className="w-full">
       <div className="relative top-20 mb-20 w-[90%] mx-auto border-b-2 border-black">
        {cartItems.map((items)=>{
            return <CartItem {...items}  key={items.id} />})
        }
        </div>
        { totalAmount>0?
                 <div className="border-b-2 border-black p-7 w-96 float-right">
                 <h1>Total:Rs. {totalAmount}.00</h1>
                 <h1>Shipping Charges:Rs. {shipping}.00</h1>
                 <h1 className="font-bold border-t-2 border-black">Subtotal ({cartItems.length} items):Rs. {grandTotal}.00</h1>
                 <button className="bg-green-600 p-2 text-white font-bold mt-5">PROCEED TO PAYOUT⏩</button>
                 </div>:<div> <h1 className="font-bold text-5xl text-center">CART IS EMPTY!!!!</h1></div>
        }
          
        

        
       </div>
        
    </>
  )
}

export default  Cart;