import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useParams } from 'react-router-dom'
import '../../assets/styles/CardDetalhes.css'
import Footer from './components/Footer'
import { Context } from "./context/OngsContext";

export default function CardDetalhes() {
    const { id } = useParams();
    const { get } = useContext(Context);
    const [instituicao, setInstituicao] = useState();
    const [modalShow, setModalShow] = React.useState(false);

    // useEffect(() => {

    //     fetch(`http://localhost:2000/clients/${id}`)
    //         .then((response) => response.json())
    //         .then(setTnstituicao);
    // }, [id]);


    // useEffect(() => {
    //   get(id).then((json) => setInstituicao(json));
    // }, [id]);
  

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              Doa Bauru
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><b><h2>
              Compartilhe com seus amigose familia e ajude esse projeto a alcançar mais gente!
              </h2></b></p>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="Text"
                placeholder="Link Será aqui"
                autoFocus
              />
            </Form.Group>
            <Button>Copiar</Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    if (!instituicao) return (<p>Carregando ...</p>)

    return (
        <>
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/instituicoes" }}>
                    Instituições
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{instituicao.name}</Breadcrumb.Item>
            </Breadcrumb>

    <Row>
        <Col xs={12} md={8}>
            <img className='imagem' src={instituicao.image} />
        </Col>
        <Col xs={6} md={4}>
        <h2>{instituicao.name}</h2>
        <h4>Sub-titulo aqui</h4>
        <Button size="lg" onClick={() => window.open(instituicao.site)} href='javascript:void(0);'>Contato</Button>{' '}
        <Button size="lg" variant="primary" onClick={() => setModalShow(true)}>Compartilhe</Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={5}>
        <br/>
          <b><h2>{instituicao.desc}</h2></b>
        </Col>
      </Row>
      <Row>
        <Col xs={6}><Button>Contato</Button></Col>
        <Col xs={6}><Button variant="primary" onClick={() => setModalShow(true)}>Compartilhe</Button>
        </Col>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Row>
      </Container>
      <br/>
      <Footer/>
</>
    )
}