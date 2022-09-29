import { Navbar, Container, Nav } from "react-bootstrap";

function Navibar() {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" className="nav" variant="dark">
      <Container>
      <Navbar.Brand href="/">
            <img
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Brand href="/">DOA Bauru</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mapa">Mapa</Nav.Link>
            <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
            <Nav.Link href="/instituicoes">Instituicoes</Nav.Link>
            <Nav.Link href="/login" className="Login-nav">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
