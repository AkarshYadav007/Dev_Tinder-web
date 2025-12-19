import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],   // ✅ FIX
  reducers: {
    addRequest: (state, action) => action.payload,
    removeRequest: (state, action) =>
      state.filter(r => r._id !== action.payload),
    removeRequests: () => []   // ✅ FIX
  }
});


export const {addRequest,removeRequest,removeRequests} = requestSlice.actions;
export default requestSlice.reducer;