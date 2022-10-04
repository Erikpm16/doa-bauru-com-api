import {Accordion} from 'react-bootstrap';
import '../../../assets/styles/Accordion.css'

function accordion() {
    return (
      <Accordion className='Accord' >
        <p className='titulo' >DUVIDAS FREQUENTES</p>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Como doar?</Accordion.Header>
        <Accordion.Body>
         Para ONG'S e instituições beneficientes, através de contato com direto com elas!  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quem irá receber?</Accordion.Header>
        <Accordion.Body>
          As instituições dicidem quem ira receber, quando for realizar a doação converse com ela sobre o caminho a seguir, se será doação online ou em visita!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Conectando quem se importa com quem faz</Accordion.Header>
        <Accordion.Body>
        Doar pode ser simples, poderoso e prazeroso!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>A fome no Brasil</Accordion.Header>
        <Accordion.Body>
        Mais de 33 milhões de brasileiros vivem com fome. Doe para compater a insegurança alimentar no país.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Campanhas do Agasalho</Accordion.Header>
        <Accordion.Body>
        Apoie as iniciativas que estão se mobilizando para aquecer quem precisa!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
  }
  
  export default accordion;
  