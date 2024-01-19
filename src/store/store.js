import {configureStore} from '@reduxjs/toolkit'; 
import productSlice from './slice/productSlice';
import categorySlice from './slice/categorySlice';
import userSlice from './slice/userSlice';
import orderSlice from './slice/orderSlice';
export const store = configureStore({
    reducer:{
        product:productSlice,
        category:categorySlice,
        user:userSlice,
        order:orderSlice
    }   
})