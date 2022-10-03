import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { Context } from "../site/context/OngsContext";
// import { Context } from "./context/AdminClientContext";

function GridComplexExample() {
  // const { create } = useContext(Context);

  const navigate = useNavigate();
  const { create } = useContext(Context);

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipcode, setZipcode] = useState();
  const [district, setDistrict] = useState();
  const [complement, setComplement] = useState();
  const [description, setDescription] = useState();
  const [telephone, setTelephone] = useState();
  const [image, setImage] = useState();
  const [site, setSite] = useState();

  const submit = (event) => {
    event.preventDefault();

    create({
      email,
      name,
      password,
      address,
      state,
      zipcode,
      district,
      description,
      telephone,
      image,
      site,
    });

    navigate("/");
    console.log (email);
  };

  return (
    <Form style={{ padding: "10px 50px 30px 30px" }} onSubmit={submit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-mail - Login</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

        <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              placeholder="Nome Completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          placeholder="Endereço"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridComplement">
        <Form.Label>Complemento</Form.Label>
        <Form.Control
          placeholder="Complemento"
          value={complement}
          onChange={(event) => setComplement(event.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridDistrict">
        <Form.Label>Bairro</Form.Label>
        <Form.Control
          placeholder="Bairro"
          value={district}
          onChange={(event) => setDistrict(event.target.value)}
        />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            placeholder="Cidade"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Control
            placeholder="Estado"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZipcode">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            placeholder="CEP"
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTelephone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            placeholder="Telefone"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </Form.Group>
      </Row>

    <Row className="mb-2">

      <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            placeholder="URL - Imagem"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSite">
          <Form.Label>Site</Form.Label>
          <Form.Control
            placeholder="URL - Site"
            value={site}
            onChange={(event) => setSite(event.target.value)}
          />
        </Form.Group>

        </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;