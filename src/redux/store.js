import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import authReducer from "./slice/AuthSlice";
import cartReducer from "./CartSlice";

export default configureStore({
  reducer: { product: productReducer, auth: authReducer, cart: cartReducer },
});
