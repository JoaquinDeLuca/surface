import { configureStore } from '@reduxjs/toolkit'
import hoodie from './hoodieAPI'
import tShirt from './tShirtAPI'



const store = configureStore({ 
    reducer: {

        [hoodie.reducerPath]: hoodie.reducer,
        [tShirt.reducerPath] : tShirt.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(hoodie.middleware)
        .concat(tShirt.middleware)
})

export default store