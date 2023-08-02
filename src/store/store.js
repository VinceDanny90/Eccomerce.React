import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories/categoriesReducer'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    }
})