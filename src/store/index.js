import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cardSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    card: cardSlice.reducer,
  },
});

export default store;
