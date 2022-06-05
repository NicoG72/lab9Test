export default function appReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case "UPDATE_TASK": {
      const updatedTask = payload;

      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "TASK_STATUS": {
      return {
        ...state,
        tasks: state.tasks.map(
          (task) => (task.id = payload ? { ...task, done: !task.done } : task)
        ),
      };
    }
    case "DELETE_ALL":
      return { tasks: [] };
    default:
      return state;
  }
}
