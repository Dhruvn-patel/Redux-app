import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices";
import { todoSlice } from "./todos";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "./todos/todos.reducer";
import createSagaMiddleware from "redux-saga";
const rootReducers = combineReducers({
  counter: counterSlice.reducer,
  // todos: todoSlice.reducer,
  todos: todoReducer,
});

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const persistConfig = {
  key: "todos",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }),
});
export const persistor = persistStore(store);
