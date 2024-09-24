import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice";
import { loggerMiddleware } from "./loggerMiddleware";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
