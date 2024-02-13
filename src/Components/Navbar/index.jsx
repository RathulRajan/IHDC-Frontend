import "./navbar.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="navbar">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="real-estate-house.png"
              width="100"
              height="100"
              className="d-inline-block "
            />
          </Navbar.Brand>
          <span>XYZ SYSTEMS LLP</span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
