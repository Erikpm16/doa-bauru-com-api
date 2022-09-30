import { Accordion } from "react-bootstrap";
import quemSomos from "../../assets/img/quemsomos.jpg";
import "../../assets/styles/QuemSomos.css";
import Card from "react-bootstrap/Card";
import Footer from "./components/Footer";

export default function QuemSomos() {
  return (
    <div className="container-quemsomos">
      <img src={quemSomos} className="quemSomos"></img>
      <Card className="cardQuemSomos">
        <Card.Body>
          <Card.Title>Quem Somos</Card.Title>
          <Card.Text>
            Somos um grupo de estudante formados por, Luiz Felipe Porto, Celio
            Tinit e Erik Martins, juntos desenvolvemos essa plataforma para
            ajudar a cidade de Bauru, onde encontrar doacoes e tambem aprender
            mais sobre cada instituicoes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Accordion className="Accord-Quemsomos">
        <p className="titulo">
          Contato dos envolvividos com o projeto Doa Bauru
        </p>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Luiz Felipe Porto</Accordion.Header>
          <Accordion.Body>
            <a href="#">Instagram</a>
            <br />
            <a href="#">WhatsApp</a>
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Celio Tinti</Accordion.Header>
          <Accordion.Body>
            <a href="#">Instagram</a>
            <br />
            <a href="#">WhatsApp</a>
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Erik Martins</Accordion.Header>
          <Accordion.Body>
            <a href="#">Instagram</a>
            <br />
            <a href="#">WhatsApp</a>
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Senac Bauru</Accordion.Header>
          <Accordion.Body>
            Senac Bauru
            <br /> Bloco I Rua Engenheiro Saint Martin, 10-17 Centro, Bauru -
            SP, 17010-150 <br />
            Bloco II Rua Engenheiro Saint Martin, 10-12 Centro, Bauru, 17010-150
            <br />
            Atendimento: De segunda a sexta-feira, das 8 às 21 horas, e aos
            sábados, das 8 às 14 horas. Se tiver dúvidas, acesse o Fale com a
            gente ou envie um e-mail para bauru@sp.senac.br.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="footer-quemsomos"></div>
      <Footer />
    </div>
  );
}
