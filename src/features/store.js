import { configureStore } from '@reduxjs/toolkit'
import hoodie from './hoodieAPI'



const store = configureStore({ 
    reducer: {

        [hoodie.reducerPath]: hoodie.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(hoodie.middleware)
})

export default store