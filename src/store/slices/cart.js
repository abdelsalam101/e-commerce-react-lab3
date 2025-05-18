import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          const itemIndex = state.findIndex((i) => i.id === action.payload);
          state.splice(itemIndex, 1);
        }
      }
    },
    reset: (state) => {
      state.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, reset } = cartSlice.actions;
export default cartSlice.reducer;