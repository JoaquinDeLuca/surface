import { createSlice } from "@reduxjs/toolkit";
    
const initialState = {
    products: [],
    totalAmout: 0, // monoto total 
    totalCount: 0 // cantidad de productos
}
const cartSlice = createSlice({

    name: 'cart',
    initialState,
        
   

    reducers:{
        addToCart: (state, actions) => {
            const itemIndex = state.products.findIndex( item => item._id === actions.payload._id)
            if (itemIndex >= 0){
                if (state.products[itemIndex].cartQuantity < actions.payload.stock){
                    state.products[itemIndex].cartQuantity += 1
                    state.totalCount++
                    state.totalAmout+= actions.payload.price
                }
            } else {

                const tempProduct = { ...actions.payload, cartQuantity: 1}
                state.products.push(tempProduct)
                state.totalCount++
                state.totalAmout+= actions.payload.price

                //alert add
            }
        },
        removeCartItem: (state, actions) =>  {
            const nextCartitems = state.products.filter( item => item._id !== actions.payload._id)
            state.totalAmout-= (actions.payload.price)*(actions.payload.cartQuantity)
            state.totalCount-= actions.payload.cartQuantity

            state.products = nextCartitems;
            // alert remove
        },
        decrease:  (state, actions) => {
            const itemIndex = state.products.findIndex(item => item._id === actions.payload._id)

            if (state.products[itemIndex].cartQuantity > 1){

                state.products[itemIndex].cartQuantity -= 1
                state.totalAmout-= actions.payload.price
                state.totalCount--
                //alert decrease

            } else if(state.products[itemIndex].cartQuantity === 1){

                const nextCartitems = state.products.filter( item => item._id !== actions.payload._id)
                state.totalAmout-= actions.payload.price 
                state.totalCount--

                state.products = nextCartitems;
            }
        },
    }
})

export default cartSlice.reducer
export const {
    addToCart,
    removeCartItem,
    decrease,

} = cartSlice.actions