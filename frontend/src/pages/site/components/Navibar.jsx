import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navibar() {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" className="nav" variant="dark">
      <Container>
      <Navbar.Brand href="/">
            <img
              src="https://github.com/Erikpm16/doa-bauru-com-api/blob/erik-branch/frontend/public/img/Logo%20Cora%C3%A7%C3%A3o.png?raw=true"
              width="70"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Brand as={Link} to="/">DOA Bauru</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/mapa">Mapa</Nav.Link>
            <Nav.Link as={Link} to="/quemsomos">Quem somos</Nav.Link>
            <Nav.Link as={Link} to="/instituicoes">Instituicoes</Nav.Link>
            <Nav.Link as={Link} to="/login" className="Login-nav">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
