import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    editTodo: (state, action) => {
      const { idx, updatedTodo } = action.payload;
      state.todos = state.todos.map((todo, index) =>
        index === idx ? { ...todo, ...updatedTodo } : todo
      );
    },
  },
});

export const { setTodos, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
