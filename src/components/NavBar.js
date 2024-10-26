import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
    <Navbar.Brand>Inspira Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-right">
      <Nav.Link>Post <i class="fa-solid fa-arrow-up-from-bracket"></i></Nav.Link>
        <Nav.Link>Home <i class="fa-solid fa-archway"></i></Nav.Link>
        <Nav.Link>Sign In <i class="fa-solid fa-arrow-right-to-bracket"></i></Nav.Link>
        <Nav.Link>Sign Up <i class="fa-solid fa-user-plus"></i></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default NavBar;