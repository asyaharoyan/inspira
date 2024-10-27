import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
    <NavLink to="/">
    <Navbar.Brand>Inspira Logo</Navbar.Brand>
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-right">
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        exact to="/post">
        Post <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          exact to="/">
            Home <i class="fa-solid fa-archway"></i>
        </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          exact to="/signin">
            Sign In <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </NavLink>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          exact to="/signup">
            Sign Up <i class="fa-solid fa-user-plus"></i>
        </NavLink>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default NavBar;