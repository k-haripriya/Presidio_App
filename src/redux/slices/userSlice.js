import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState =[];

export const userSlice = createSlice ({
    name:'user',
    initialState,
    reducers:{
        adduser:  (state, action)=>{
            const newuser = {
               Id:uuid(),
               email:action.payload.Email,
               pass:action.payload.Password,
            }
            state.push(newuser);
            
        },
        
        
    }
})

export const { adduser } = userSlice.actions;

export default userSlice.reducer;