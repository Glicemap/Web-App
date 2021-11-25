import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import PatientRow from '../../../components/Patients/PatientRow';
import { fetchPatients } from '../../../api/requests';

const DashDefault = () => {
    const[list, setList] = useState([]);
    const[filter, setFilter] = useState({"name":"", "from":"", "to":"", "frequency":""});

    async function getList(name, from, to, frequency) {
        var fullList = await fetchPatients(name, from, to, frequency);
        console.log(fullList.patients)
        return fullList.patients;
    }

    useEffect(() => {
        async function fetch() {
            const x = await getList(filter.name, filter.from, filter.to, filter.frequency);
            setList(x)
        }
        fetch()
    }, [filter]);

    const patientsList = list.map(({ documentNumber, name, frequency, percentage }) => {
        return (
            <PatientRow
                name = {name}
                frequency = {frequency}
                percentage = {percentage}
                documentNumber = {documentNumber}
            />
        );
    });

    function handleFilter(event) {
        setFilter({"name":event.target[0].value, "from":event.target[1].value, "to":event.target[2].value, "frequency":event.target[3].value})
    }

    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">FILTRO</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleFilter}>
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
                                            <option value="">Nenhuma frequência</option>
                                            <option value="low">Baixa</option>
                                            <option value="medium">Média</option>
                                            <option value="high">Alta</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row className="filter-button">
                                    <Col md={6} xl={10}>
                                    </Col>
                                    <Col md={6} xl={2}>
                                        <Button variant="primary" type="submit">Filtrar</Button>
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
