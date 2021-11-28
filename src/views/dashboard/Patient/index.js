import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { useLocation, Link } from "react-router-dom";
import HeatCalendar from './chart/HeatCalendar';
import BarDiscreteChart from './chart/BarDiscreteChart';
import MeasureRow from './chart/MeasureRow';
import { fetchPatient, fetchDocument } from '../../../api/requests';
import { usePatientFilter } from '../../../contexts/PatientFilter';
import { usePatientCode } from '../../../contexts/PatientCode';

const PatientPage = () => {
    const[patient, setPatient] = useState({"name":"",
                                           "low":[],
                                           "midlow":[],
                                           "midhigh":[],
                                           "high":[],
                                           "frequencys":[],
                                           "measures":[]});
    const[state, setState] = useState(useLocation());

    const { patientFilter, setPatientFilter } = usePatientFilter();
    const { patientCode, setPatientCode } = usePatientCode();

    useEffect(() => {
        async function fetch() {
            const x = await fetchPatient(patientCode, patientFilter["from"], patientFilter["to"]);
            setPatient(x);
        }
        fetch()
    }, [state, patientCode, patientFilter]);

    useEffect(() => {
        if (state.state !== undefined) {
            setPatientCode(state.state.users.documentNumber)
        }
    }, [state, setPatientCode]);

    function handleFilter(event) {
        setPatientFilter({"from":event.target[0].value, "to":event.target[1].value})
    }

    function handleChange(key, value) {
        setPatientFilter({key:value})
    }

    async function getReport() {
        await fetchDocument(patientCode, patientFilter["from"], patientFilter["to"]);
    }

    const measuresList = patient.measures.map(({ date, measures }) => {
        return (
            measures.map(({sugarLevel, insulin, situation, observations}) => {
                return (
                    <MeasureRow
                        date = {date}
                        sugarLevel = {sugarLevel}
                        insulin = {insulin}
                        situation = {situation}
                        observations = {observations}
                    />
                );
            })
        );
    });

    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">{patient.name}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                        <Form onSubmit={handleFilter}>
                            <Row>
                                <Col md={6} xl={10}>
                                    <Row>
                                        <Col md={6} xl={1}>
                                            <p className="filter-and">De</p>
                                        </Col>
                                        <Col md={6} xl={5}>
                                            <Form.Control 
                                                type="date" 
                                                className="from" 
                                                value={patientFilter["from"]}
                                                onChange={e => handleChange("fron", e.target.value)}
                                            />
                                        </Col>
                                        <Col md={6} xl={1}>
                                            <p className="filter-and">até</p>
                                        </Col>
                                        <Col md={6} xl={5}>
                                            <Form.Control 
                                                type="date" 
                                                className="to" 
                                                value={patientFilter["to"]}
                                                onChange={e => handleChange("to", e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} xl={2}>
                                    <Button variant="primary" style={{float:"right"}} type="submit">Filtrar</Button>
                                </Col>
                            </Row>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <HeatCalendar 
                            low={patient.low}
                            midlow={patient.midlow}
                            midhigh={patient.midhigh}
                            high={patient.high}
                        />
                    </Card>
                </Col>
                <Col md={6} xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h4">Frequências de cada intervalo glicêmico</Card.Title>
                            <Card.Subtitle as="h6">em mg/dl</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <BarDiscreteChart frequencys={patient.frequencys} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={12}>
                    <Button onClick={getReport} variant="secondary" style={{padding:"10px", float:"right"}}>Exportar para PDF <i className="feather icon-upload" style={{margin:"0 0 0 10px"}}/></Button>
                </Col>
                <Col md={6} xl={12}>
                <Card className="Recent-Users Pacients-List">
                        <Card.Header className="px-0 py-2">
                            <Table responsive>
                                <tbody>
                                    <tr className="unread">
                                        <td className="col-xl-3">
                                            <h6 className="mb-1">DATA</h6>
                                        </td>
                                        <td className="col-xl-3">
                                            <h6 className="mb-1">OCASIÕES</h6>
                                        </td>
                                        <td className="col-xl-3">
                                            <h6 className="mb-1">GLICEMIA</h6>
                                        </td>
                                        <td className="col-xl-3">
                                            <h6 className="mb-1">INSULINA APLICADA</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Header>
                        <Card.Body className="px-0 py-2">
                            <Table responsive hover>
                                <tbody>
                                    {measuresList}
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
