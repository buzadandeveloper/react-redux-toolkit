import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.tasks = [
        ...state.tasks,
        { id: state.tasks.length + 1, description: action.payload },
      ];
    },
    removeToDo: (state, action) => {
      const updateTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      const newTasks = updateTasks.map((task, index) => ({
        ...task,
        id: index + 1,
      }));
      state.tasks = newTasks;
    },
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
