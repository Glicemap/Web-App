import React from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import HeatCalendar from './chart/HeatCalendar';
import BarDiscreteChart from './chart/BarDiscreteChart';

const PatientPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Robert Fox</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6} xl={8}>
                                    <Row>
                                        <Col md={6} xl={1}>
                                            <p className="filter-and">De</p>
                                        </Col>
                                        <Col md={6} xl={5}>
                                            <Form.Control type="date"></Form.Control>
                                        </Col>
                                        <Col md={6} xl={1}>
                                            <p className="filter-and">até</p>
                                        </Col>
                                        <Col md={6} xl={5}>
                                            <Form.Control type="date"></Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} xl={2} />
                                <Col md={6} xl={2}>
                                    <Button variant="primary" style={{float:"right"}}>Filtrar</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <HeatCalendar />
                    </Card>
                </Col>
                <Col md={6} xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Frequências de cada intervalo glicêmico</Card.Title>
                            <Card.Subtitle as="h6">em mg/dl</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <BarDiscreteChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={12}>
                    <Button variant="secondary" style={{padding:"10px", float:"right"}}>Exportar para PDF <i class="feather icon-upload" style={{margin:"0 0 0 10px"}}/></Button>
                </Col>
                <Col md={6} xl={12}>
                <Card className="Recent-Users Pacients-List">
                        <Card.Header className="px-0 py-2">
                            <Table responsive>
                                <tbody>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="mb-1">DATA</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="mb-1">OCASIÕES</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="mb-1">GLICEMIA</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="mb-1">INSULINA APLICADA</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <Table responsive hover>
                                <tbody>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">29/09/2021</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">2h Após Jantar</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">120 mg/dl</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">1</h6>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">29/09/2021</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">Antes do Jantar</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">85 mg/dl</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">1</h6>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">29/09/2021</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">Antes do Café da Tarde</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">100 mg/dl</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">2</h6>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">29/09/2021</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">Antes do Almoço</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">350 mg/dl</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">6</h6>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">29/09/2021</h6>
                                        </td>
                                        <td class="col-xl-3">
                                            <h6 className="text-muted">Antes do Café da Manhã</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">50 mg/dl</h6>
                                        </td>
                                        <td class="col-xl-3 progress-registers">
                                            <h6 className="text-muted">-</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default PatientPage;
