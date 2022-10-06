import { configureStore } from '@reduxjs/toolkit'
import hoodie from './actions/hoodieAPI'
import userApi from './actions/userAPI'
import capApi from './actions/capAPI'
import tShirt from './actions/tShirtAPI'



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