import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnect:(state,action) => {return action.payload},
        removeConnect:() => {return []}
    }
})

export const {addConnect,removeConnect} = connectionSlice.actions;
export default connectionSlice.reducer;