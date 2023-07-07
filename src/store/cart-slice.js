import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "card",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    addtoCard(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCard(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
    },
    setShowCard(state) {
      state.showCard = !state.showCard;
    },
  },
});

export const cardActions = cartSlice.actions;

export default cartSlice;
