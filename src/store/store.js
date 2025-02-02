import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    products: productReducer,
  },
});
