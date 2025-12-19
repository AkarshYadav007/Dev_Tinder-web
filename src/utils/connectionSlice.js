import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: [],   // ✅ FIX
  reducers: {
    addConnect: (state, action) => action.payload,
    removeConnect: () => []
  }
});


export const {addConnect,removeConnect} = connectionSlice.actions;
export default connectionSlice.reducer;