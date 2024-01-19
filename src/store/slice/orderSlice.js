import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../http';

export const getByUser = createAsyncThunk('order/getByUser',async(userId)=>{
     const response = await publicRequest.get(`/order/byuser/${userId}`); 
     return response.data; 
})


export const createOrder = createAsyncThunk('order/createOrder',async(data)=>{
    const response = await publicRequest.post(`/order`,data); 
    return response.data; 
})

export const createOrderPaypal = createAsyncThunk('order/createOrderPaypal',async(data)=>{
    const response = await publicRequest.post(`/order/paypal`,data); 
    return response.data; 
})


const orderSlice = createSlice({
    name:'order',
    initialState:{
       orders:[],
       success:false
    },
    reducers:{
    resetSuccess:(state,action)=>{
        state.success = false; 
    }, 
    }, 
    extraReducers:(builder)=>{
        builder.addCase(getByUser.fulfilled,(state,action)=>{
           state.orders = action.payload.data; 
        })

        builder.addCase(createOrder.fulfilled,(state,action)=>{
           state.success = true; 
         })
     
    }
})


export const {resetSuccess} = orderSlice.actions; 
export default orderSlice.reducer; 