import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import { Context } from "./context/AdminClientContext";

function GridComplexExample() {
  // const { create } = useContext(Context);

  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [password, setPassword] = useState();
  const [enredeco, setEnredeco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  const [bairro, setBairro] = useState();
  const [complemento, setComplemento] = useState();
  const [description, setDescricao] = useState();
  const [telephone, setTelephone] = useState();

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <Form style={{ padding: "10px 50px 30px 30px" }} onSubmit={submit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          placeholder="Endereço"
          value={enredeco}
          onChange={(event) => setEnredeco(event.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridComplemento">
        <Form.Label>Complemento</Form.Label>
        <Form.Control
          placeholder="Complemento"
          value={complemento}
          onChange={(event) => setComplemento(event.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridBairro">
        <Form.Label>Bairro</Form.Label>
        <Form.Control
          placeholder="Bairro"
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
        />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCidade">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            placeholder="Cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            placeholder="Estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescricao(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            placeholder="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            placeholder="Telefone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </Form.Group>
      </Row>

      <div class="mb-3">
  <label for="formFile" class="form-label">Imagem</label>
  <input class="form-control" type="file" id="formFile" />
</div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;
