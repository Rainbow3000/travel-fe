import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../http';

export const getCategory = createAsyncThunk('category/getCategorys',async()=>{
     const response = await publicRequest.get('/category'); 
     return response.data; 
})

const categorySlice = createSlice({
    name:'category',
    initialState:{
       categorys:[]
    },
    reducers:{
       
    }, 
    extraReducers:(builder)=>{
        builder.addCase(getCategory.fulfilled,(state,action)=>{
           state.categorys = action.payload.data; 
        })
     
    }
})


export const {} = categorySlice.actions; 
export default categorySlice.reducer; 