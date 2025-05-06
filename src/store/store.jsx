import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from '../features/items/itemsSlice'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice'
import ordersReducer from '../features/orders/ordersSlice'

const store = configureStore({
  reducer: {
    items: itemsReducer,
    products: productsReducer,
    cart: cartReducer,
    auth : authReducer,
    orders : ordersReducer
  },
})

export default store