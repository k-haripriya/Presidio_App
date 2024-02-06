import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState =[
    {
        Id: uuid(),
        name: "Haripriya",
        des: "Happy girl",
    },
    {
        Id: uuid(),
        name: "Karthikeyan",
        des: "Always be happy",
    },
];

export const peopleSlice = createSlice ({
    name:'people',
    initialState,
    reducers:{
        addPeople: (state, action) => {
            const newPerson = {
                Id: uuid(),
                name: action.payload.name,
                des: action.payload.des,
            };
            state.push(newPerson);
        },
        
        
    }
})

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;