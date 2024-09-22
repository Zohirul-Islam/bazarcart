import { createSlice } from "@reduxjs/toolkit"

const initialState = []
const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload);
        }
    }
});
export const {addToCart,removeFromCart} = cartslice.actions;
export default cartslice.reducer