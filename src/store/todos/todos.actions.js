export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: {
    data,
  },
});

export const updateTodo = ({ id, item }) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    item,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
