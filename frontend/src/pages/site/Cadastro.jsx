import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <div>
      <div className="container-form">
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="password" placeholder="Cidade" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Concluir
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Formulario;
