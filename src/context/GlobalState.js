import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import appReducer from "./AppReducer";

const InitialState = {
  tasks: [],
};

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, InitialState);

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: uuidv4(), done: false },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const deleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };

  const updateTask = (task) => {
    dispatch({ type: "UPDATE_TASK", payload: task });
  };

  const taskStatus = (id) => {
    dispatch({
      type: "TASK_STATUS",
      payload: id,
    });
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          tasks: state.tasks,
          addTask,
          updateTask,
          deleteTask,
          deleteAll,
          taskStatus,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
