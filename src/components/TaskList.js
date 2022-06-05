import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import {
  BsPencilFill,
  BsFillTrashFill,
  BsHandThumbsDown,
  BsHandThumbsUp,
} from "react-icons/bs";
import { ListGroup, Container, Button } from "react-bootstrap";

function TaskList() {
  const { tasks, deleteAll, deleteTask, taskStatus } =
    useContext(GlobalContext);
  return (
    <>
      <div className="row mx-0 px-0 my-3 px-5 py-3w-100">
        <div className="col-sm-6 p-3">
          <h3>List of Tasks</h3>
          {tasks.length}
        </div>
        <div className="col-sm-6 d-flex justify-content-end p-3">
          <Button variant="danger" className="w-50" onClick={() => deleteAll()}>
            Delete all
          </Button>
        </div>
        <hr className="mb-2" />
        <Container className="p-3 mb-3 d-flex justify-content-center" fluid>
          <ListGroup className="w-50">
            {tasks.map((task) => (
              <ListGroup.Item
                className="d-flex justify-content-between align-items-start mb-2 border border-dark"
                key={task.id}
              >
                <div className="row mx-0 px-0 w-100">
                  <div className="col-sm-6 px-1 py-2 d-flex align-items-center ">
                    <h5 className="mt-1">{task.title}</h5>
                  </div>
                  <div className="col-sm-6 px-1 py-2 d-flex justify-content-end">
                    <Link
                      to={`/edit/${task.id}`}
                      exact={"true"}
                      className="btn btn-warning"
                    >
                      <BsPencilFill />
                    </Link>
                    <Button
                      variant="danger"
                      className="mx-1"
                      onClick={() => deleteTask(task.id)}
                    >
                      <BsFillTrashFill />
                    </Button>
                    <Button
                      variant={!task.done ? "secondary" : "success"}
                      onClick={() => taskStatus(task.id)}
                    >
                      {!task.done ? <BsHandThumbsDown /> : <BsHandThumbsUp />}
                    </Button>
                  </div>
                  <hr className="mb-0" />
                  <div className="col-12 px-1 py-2">{task.description}</div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
    </>
  );
}

export default TaskList;
