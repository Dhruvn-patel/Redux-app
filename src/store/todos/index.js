import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrTodo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.arrTodo.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.arrTodo = state.arrTodo.map((data) => {
        if (data.id == action.payload.id) {
          return { ...data, item: action.payload.item };
        }
        return data;
      });
    },
    removeTodo: (state, action) => {
      const index = state.arrTodo.findIndex(
        (data) => data.id == action.payload.id
      );

      if (index != -1) state.arrTodo.splice(index, 1);
    },
  },
});
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
// const todoData = useSelector((state) => state);
// console.log("todoData :>> ", todoData);
export default todoSlice.reducer;
