export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  if (action.type === "toDo/addToDo") {
    action.payload =
      action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
  }
  console.log("State after dispatch:", store.getState());
  return next(action);
};
