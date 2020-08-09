import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ dispatch }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">GitHub Issue List</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
