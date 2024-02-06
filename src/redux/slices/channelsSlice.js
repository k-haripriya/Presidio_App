import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState =[
    {
        Id: uuid(),
        name: "Positivity",
        des: "Description of Channel 1",
    },
    {
        Id: uuid(),
        name: "Party",
        des: "Description of Channel 2",
    },
];

export const channelSlice = createSlice ({
    name:'channels',
    initialState,
    reducers:{
        addChannel:  (state, action)=>{
            const newchannel = {
               Id:uuid(),
               name:action.payload.ChannelName,
               des:action.payload.Description,
            }
            state.push(newchannel);
            
        },
        
        
    }
})

export const { addChannel } = channelSlice.actions;

export default channelSlice.reducer;