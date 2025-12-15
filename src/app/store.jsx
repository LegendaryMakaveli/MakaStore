import {configureStore} from '@reduxjs/toolkit';
import {productApi} from "../apis/productApi";
import cartReducer from "../features/cart/cartSlice";


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});