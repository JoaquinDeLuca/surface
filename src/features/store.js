import { configureStore } from '@reduxjs/toolkit'
//apis
import hoodie from './actions/hoodieAPI'
import userApi from './actions/userAPI'
import capApi from './actions/capAPI'
import tShirt from './actions/tShirtAPI'
//reducers
import CartReducer from './Cart/CartSlice.jsx'




const store = configureStore({
    reducer: {
        [hoodie.reducerPath]: hoodie.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [capApi.reducerPath]: capApi.reducer,
        [tShirt.reducerPath]: tShirt.reducer,

        cart: CartReducer


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(hoodie.middleware, capApi.middleware, userApi.middleware, tShirt.middleware)

})



export default store