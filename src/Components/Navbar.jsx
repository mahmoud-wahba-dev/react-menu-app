import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (e) => {
    // e.preventDefault()
    filterBySearch(searchValue);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="">
      <Container>
        <Navbar.Brand href="#">مطعم جديد </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="ابحث هنا"
              className="mx-2"
            />

            <Button onClick={onSearch} className="btn_search">
              بحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
