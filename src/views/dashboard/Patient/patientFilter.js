import { Row, Col, Form, Button } from 'react-bootstrap';

function PatientFilter(props) {
    return (
        <Form onSubmit={props.handleFilter}>
            <Row>
                <Col md={6} xl={10}>
                    <Row>
                        <Col md={6} xl={1}>
                            <p className="filter-and">De{props.filter["from"]}</p>
                        </Col>
                        <Col md={6} xl={5}>
                            <Form.Control type="date" className="from" placeholder={props.filter["from"]}></Form.Control>
                        </Col>
                        <Col md={6} xl={1}>
                            <p className="filter-and">até</p>
                        </Col>
                        <Col md={6} xl={5}>
                            <Form.Control type="date" className="to" placeholder={props.filter["to"]}></Form.Control>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xl={2}>
                    <Button variant="primary" style={{float:"right"}} type="submit">Filtrar</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default PatientFilter;