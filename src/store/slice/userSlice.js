import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {publicRequest} from '../../http';

export const login = createAsyncThunk('login',async(data)=>{
    try {
        const response = await publicRequest.post('/auth/login',data); 
        return response.data; 
    } catch (error) {     
        throw new Error(error.response.data.data)
    }
})

export const register = createAsyncThunk('register',async(data)=>{
    try {        
        const response = await publicRequest.post('/auth/register',data); 
        return response.data; 
    } catch (error) {
        throw new Error(error.response.data.data)
    }
})


const userSlice = createSlice({
    name:'user',
    initialState:{
       user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
       ,success:false,
       error:''
    },
    reducers:{
        resetSuccess:(state,action)=>{
            state.success = false; 
        },
        logout:(state,action)=>{
            state.user = null; 
            localStorage.clear(); 
        }
        
    }, 
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
           state.user = action.payload.data; 
           state.success = true; 
           localStorage.setItem('user',JSON.stringify(state.user))
        })

        builder.addCase(login.rejected,(state,action)=>{       
           state.error = action.error.message; 
         })

        builder.addCase(register.fulfilled,(state,action)=>{        
            state.success = true; 
         })

         builder.addCase(register.rejected,(state,action)=>{        
            state.error = action.error.message; 
         })
     
    }
})


export const {resetSuccess,logout} = userSlice.actions; 
export default userSlice.reducer; 