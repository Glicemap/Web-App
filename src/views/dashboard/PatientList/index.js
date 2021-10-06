import React from 'react';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashDefault = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">FILTRO</Card.Title>
                        </Card.Header>
                        <Card.Body>
                                <Form>
                                    <Row>
                                        <Col md={6} xl={3}>
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="text" placeholder="Digite o nome do paciente"></Form.Control>
                                        </Col>
                                        <Col md={6} xl={6}>
                                            <Form.Label>Cadastrado entre</Form.Label>
                                            <Row>
                                                <Col md={6} xl={5}>
                                                    <Form.Control type="date"></Form.Control>
                                                </Col>
                                                <Col md={6} xl={2}>
                                                    <p className="filter-and">e</p>
                                                </Col>
                                                <Col md={6} xl={5}>
                                                    <Form.Control type="date"></Form.Control>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col md={6} xl={3}>
                                            <Form.Label>Frequência de Medições</Form.Label>
                                            <Form.Control as="select">
                                                <option>Nenhuma frequência</option>
                                                <option value="1">Baixa</option>
                                                <option value="2">Média</option>
                                                <option value="3">Alta</option>
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                    <Row className="filter-button">
                                        <Col md={6} xl={10}>
                                        </Col>
                                        <Col md={6} xl={2}>
                                            <Button variant="primary">Filtrar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={10} xl={12}>
                    <Card className="Recent-Users Pacients-List">
                        <Card.Header className="px-0 py-2">
                            <Table responsive>
                                <tbody>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <h6 className="mb-1">PACIENTE</h6>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="mb-1">FREQUÊNCIA DE MEDIÇÕES</h6>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="mb-1">% DE REGISTROS DE GLICEMIA ALVO</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <Table responsive hover>
                                <tbody>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Robert Fox</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                Baixa
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">25%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '25%'}}
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Darlene Robertson</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                Alta
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">50%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '50%'}}
                                                            aria-valuenow="50"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Theresa Webb</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-yellow f-10 m-r-15" />
                                                Média
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">75%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '75%'}}
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Kristin Watson</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-yellow f-10 m-r-15" />
                                                Média
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">100%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '100%'}}
                                                            aria-valuenow="100"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Cody Fisher</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                Baixa
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">75%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '75%'}}
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Jane Cooper</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                Alta
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">50%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '50%'}}
                                                            aria-valuenow="50"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Jerome Bell</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                Alta
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">25%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '25%'}}
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Jenny Wilson</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                Baixa
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">50%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '50%'}}
                                                            aria-valuenow="50"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Darrell Steward</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-yellow f-10 m-r-15" />
                                                Média
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">75%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '75%'}}
                                                            aria-valuenow="75"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td class="col-xl-4">
                                            <a href="/patient-list/patient" as="h6" className="mb-1">Savannah Nguyen</a>
                                        </td>
                                        <td class="col-xl-4">
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                Alta
                                            </h6>
                                        </td>
                                        <td class="col-xl-4 progress-registers">
                                            <tr>
                                                <td class="percentage">
                                                    <p className="m-b-0">100%</p>
                                                </td>
                                                <td className="col-xl-12">
                                                    <div className="progress m-t-30" style={{ height: '4px', margin: '15px 0px' }}>
                                                        <div
                                                            className="progress-bar progress-c-theme"
                                                            role="progressbar"
                                                            style={{ width: '100%'}}
                                                            aria-valuenow="100"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
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

export default DashDefault;
