import { createSlice } from "@reduxjs/toolkit";
    
const initialState = {
    products: [],
    totalAmout: 0,
    totalCount: 0
}
const cartSlice = createSlice({

    name: 'cart',
    initialState,
        
   

    reducers:{
        setCart: (state, actions) =>{
                state.totalCount++
                state.products=[...state.products,actions.payload]
         },
         setPrice:(state,actions) =>{
            state.totalAmout+= actions.payload
         }
    }
})

export default cartSlice.reducer
export const { setCart, setPrice } = cartSlice.actions