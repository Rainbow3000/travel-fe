import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../http';

function removeDiacritics(str) {
    return str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
  }


export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
     const response = await publicRequest.get('/product'); 
     return response.data; 
})

export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory',async(categoryId)=>{
    const response = await publicRequest.get(`/product/getByCategory/${categoryId}`); 
    return response.data; 
})


export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProducts', async (tourId)=>{
    const response = await publicRequest.get(`/product/${tourId}`)
    return response.data;
})


const productSlice = createSlice({
    name:'products',
    initialState:{
     products:[],
     travelProducts:[],
     singleTour:null
    },
    reducers:{
       findProduct:(state,action)=>{
          
            state.travelProducts = state.products; 
            state.travelProducts = state.travelProducts.filter(item =>{
             
                return removeDiacritics(item.name).includes(removeDiacritics(action.payload))
            })
       }
    }, 
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
           state.products = action.payload.data;
           state.travelProducts = action.payload.data; 
        })
        builder.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.singleTour = action.payload.data;
         })
     
    }
})


export const {findProduct} = productSlice.actions; 
export default productSlice.reducer; 