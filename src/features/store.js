import { configureStore } from '@reduxjs/toolkit'
//apis
import hoodie from './actions/hoodieAPI'
import capApi from './actions/capAPI'
import tShirt from './actions/tShirtAPI'
import authApi from './actions/authAPI'
import concurseApi from './actions/ConcurseAPI'
import products from './actions/product'
//reducers
import CartReducer from './Cart/CartSlice.jsx'
import UserStatus from './actions/UserStatus'
// Persist 
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Persist Cart
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, CartReducer)

// Persist User
const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['isLoggingIn'] 
}
const persitedUSer = persistReducer(authPersistConfig, UserStatus)

const store = configureStore({
    reducer: {
        [hoodie.reducerPath]: hoodie.reducer,
        [capApi.reducerPath]: capApi.reducer,
        [tShirt.reducerPath]: tShirt.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [concurseApi.reducerPath]: concurseApi.reducer,
        [products.reducerPath]: products.reducer,
        
        user: persitedUSer,
        cart: persistedReducer

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(
                hoodie.middleware,
                capApi.middleware, 
                tShirt.middleware, 
                authApi.middleware,
                concurseApi.middleware,
                products.middleware
            )

})



export default store