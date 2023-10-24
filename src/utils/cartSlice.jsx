import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:JSON.parse(localStorage.getItem('cart')) ?? [],
        
    },
    reducers:{
        addItem:(state,action)=>{            //additem->action      ()->reducer function  //mapping of both
                state.items.push(action.payload)                             //state->initial state(Previous state)  |\|  action->data which is coming in
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter(item => item.id != action.payload);
        },
      

        clearCart:(state)=>{
            state.items=[];
        }
    }
    
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;