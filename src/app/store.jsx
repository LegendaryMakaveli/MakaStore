import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { productApi } from '../apis/productApi'
import { loginAndSignUpApi } from '../apis/loginAndSignUpApi'
import cartReducer from '../features/cart/cartSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  cart: cartReducer,
  [productApi.reducerPath]: productApi.reducer,
  [loginAndSignUpApi.reducerPath]: loginAndSignUpApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      productApi.middleware,
      loginAndSignUpApi.middleware
    ),
})


export const persistor = persistStore(store)
