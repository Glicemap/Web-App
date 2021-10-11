import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PatientRow from '../../../components/Patients/PatientRow';
import { fetchAllPatients } from '../../../api/requests';
import { Patients } from './mock.js'

const DashDefault = () => {
    const[list, setList] = useState([]);

    /*async function getList() {
        var fullList = await fetchAllPatients();
        return fullList.data;
    }*/

    useEffect(() => {
        setList(Patients);
    }, [list]);

    const patientsList = list.map(({ id, name, frequency, percentage }) => {
        return (
            <PatientRow
                name = {name}
                frequency = {frequency}
                percentage = {percentage}
            />
        );
    });

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
                                        <td className="col-xl-4">
                                            <h6 className="mb-1">PACIENTE</h6>
                                        </td>
                                        <td className="col-xl-4">
                                            <h6 className="mb-1">FREQUÊNCIA DE MEDIÇÕES</h6>
                                        </td>
                                        <td className="col-xl-4">
                                            <h6 className="mb-1">% DE REGISTROS DE GLICEMIA ALVO</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <Table responsive hover>
                                <tbody>
                                    {patientsList}
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
