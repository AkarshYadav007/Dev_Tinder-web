import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],   // ✅ FIX
  reducers: {
    addFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) =>
      state.filter(user => user._id !== action.payload),
    removeFeed: () => []   // ✅ FIX
  }
});


export const {addFeed,removeUserFromFeed,removeFeed} = feedSlice.actions;
export default feedSlice.reducer;
