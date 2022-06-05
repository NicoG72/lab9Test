import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <Routes>
        <Route path="/" element={<TaskList />} exact />
        <Route path="/add" element={<TaskForm />} exact />
        <Route path="/edit/:id" element={<TaskForm />} exact />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
