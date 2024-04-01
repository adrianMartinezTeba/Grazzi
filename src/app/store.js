import { configureStore } from '@reduxjs/toolkit'
import user from '../features/user/userSlice'
import product from '../features/product/productSlice'
export const store = configureStore({
  reducer: {
    user,
    product
  },
})