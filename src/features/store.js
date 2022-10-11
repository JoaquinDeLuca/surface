import { configureStore } from '@reduxjs/toolkit'
//apis
import hoodie from './actions/hoodieAPI'
import userApi from './actions/userAPI'
import capApi from './actions/capAPI'
import tShirt from './actions/tShirtAPI'
import authApi from './actions/authAPI'
//reducers
import CartReducer from './Cart/CartSlice.jsx'
import UserStatus from './actions/UserStatus'
// Persist 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, CartReducer)


const store = configureStore({
    reducer: {
        [hoodie.reducerPath]: hoodie.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [capApi.reducerPath]: capApi.reducer,
        [tShirt.reducerPath]: tShirt.reducer,
        [authApi.reducerPath]: authApi.reducer,

        user: UserStatus
        cart: persistedReducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(
                hoodie.middleware,
                capApi.middleware, 
                userApi.middleware, 
                tShirt.middleware, 
                authApi.middleware
            )

})



export default store