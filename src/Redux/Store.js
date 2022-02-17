import { configureStore } from '@reduxjs/toolkit'
import ShopReducer from './ShopSlice/ShopSlice'

export const store = configureStore({
    reducer: {
        shop: ShopReducer
    },
})