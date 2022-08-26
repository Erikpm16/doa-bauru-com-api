import { Col, Row } from "react-bootstrap";
import Card from "./Card";

function DestaqueCards({ongs}) {
    return (
        <>
        <Row style={{padding:'30px'}}>
            {ongs.map((ong) => (
            <Col md={3}>
                <Card img={ong.photo} title={ong.name}/>
            </Col>))}
        </Row>
        </>
    );
}

export default DestaqueCards;