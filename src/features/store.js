import { configureStore } from '@reduxjs/toolkit'
import hoodie from './hoodieAPI'
import userApi from './userAPI'
import capApi from './capAPI'
import tShirt from './tShirtAPI'



const store = configureStore({
    reducer: {
        [hoodie.reducerPath]: hoodie.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [capApi.reducerPath]: capApi.reducer,
        [tShirt.reducerPath]: tShirt.reducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(hoodie.middleware, capApi.middleware, userApi.middleware, tShirt.middleware)

})



export default store