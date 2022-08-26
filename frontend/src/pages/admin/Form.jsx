import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Context } from "./context/AdminClientContext";

function GridComplexExample() {
  const { create } = useContext(Context);

  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [password, setPassword] = useState();
  const [enredeco, setEnredeco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();

  const submit = (event) => {
    event.preventDefault();
    create({
      email,
      nome,
      password,
      enredeco,
      cidade,
      estado,
      cep,
    });
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
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          placeholder="Endereço"
          value={enredeco}
          onChange={(event) => setEnredeco(event.target.value)}
        />
      </Form.Group>

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
          {/* <Form.Select defaultValue="Estado">
                        <option>Estados</option>
                        <option>Acre (AC)</option>
                        <option>Alagoas (AL)</option>
                        <option>Amapá (AP)</option>
                        <option>Amazonas (AM)</option>
                        <option>Bahia (BA)</option>
                        <option>Ceará (CE)</option>
                        <option>Distrito Federal (DF</option>)
                        <option>Espírito Santo (ES</option>)
                        <option>Goiás (GO)</option>
                        <option>Maranhão (MA)</option>
                        <option>Mato Grosso (MT</option>)
                        <option>Mato Grosso do</option> Sul (MS)
                        <option>Minas Gerais (MG</option>)
                        <option>Pará (PA)</option>
                        <option>Paraíba (PB)</option>
                        <option>Paraná (PR)</option>
                        <option>Pernambuco (PE)</option>
                        <option>Piauí (PI)</option>
                        <option>Rio de Janeiro</option> (RJ)
                        <option>Rio Grande do</option> Norte (RN)
                        <option>Rio Grande do</option> Sul (RS)
                        <option>Rondônia (RO)</option>
                        <option>Roraima (RR)</option>
                        <option>Santa Catarina (SC</option>)
                        <option>São Paulo (SP</option>)
                        <option>Sergipe (SE)</option>
                        <option>Tocantins (TO)</option>
                        <option>...</option>
                    </Form.Select> */}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            placeholder="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;
