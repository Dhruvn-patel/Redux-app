import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todos.actions";
const initialState = {
  arrTodo: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, arrTodo: [...state.arrTodo, action.payload.data] };
    case UPDATE_TODO:
      return {
        ...state,
        arrTodo: state.arrTodo.map((data) => {
          if (data.id == action.payload.id)
            return {
              ...data,
              item: action.payload.item,
            };
          return data;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        arrTodo: state.arrTodo.filter((data) => data.id != action.payload.id),
      };

    default:
      return state;
  }
};
