import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

function Heading() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="py-2" variant="dark">
        <Container fluid>
          <Link to="/" exact={"true"} className="navbar-brand">
            <h3 className="my-0">Task's App</h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                to="/add"
                exact={"true"}
                className="btn btn-outline-success px-3"
              >
                Add <BsPlusLg className="ms-2 mb-1" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
