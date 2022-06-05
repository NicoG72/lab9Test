import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import { BsPlusLg, BsFillPencilFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

function TaskForm() {
  const { tasks, addTask, updateTask } = useContext(GlobalContext);
  const params = useParams();
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSub = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <>
      <h3 className="text-center my-3">
        {task.id ? `Editing Task: ${task.title}` : "Form new Task"}
      </h3>
      <Container
        fluid
        className="d-flex justify-content-center mb-3"
        onSubmit={onSub}
      >
        <Form className="p-4 bg-secondary w-50">
          <FloatingLabel
            className="mb-3"
            label={
              <label className="fw-bold">
                Title: <b className="text-danger">*</b>
              </label>
            }
          >
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              value={task.title}
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            label={
              <label className="fw-bold">
                Description: <b className="text-danger">*</b>
              </label>
            }
          >
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleChange}
              value={task.description}
            />
            <div className="d-flex justify-content-center align-items-center mt-4">
              {task.id ? (
                <Button
                  className="px-2 py-2 w-50"
                  variant="primary"
                  type="submit"
                >
                  <BsFillPencilFill className="me-2" /> Modify
                </Button>
              ) : (
                <Button
                  className="px-2 py-2 w-50"
                  variant="success"
                  type="submit"
                >
                  <BsPlusLg className="me-2" /> Add
                </Button>
              )}
            </div>
          </FloatingLabel>
        </Form>
      </Container>
    </>
  );
}

export default TaskForm;
