import {configureStore,} from '@reduxjs/toolkit';
import {productApi} from "../apis/productApi";
import cartReducer from "../features/cart/cartSlice";
import { loginAndSignUpApi } from '../apis/loginAndSignUpApi';


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
        [loginAndSignUpApi.reducerPath]: loginAndSignUpApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, loginAndSignUpApi.middleware),
});