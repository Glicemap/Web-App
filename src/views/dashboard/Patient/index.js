import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import HeatCalendar from './chart/HeatCalendar';
import BarDiscreteChart from './chart/BarDiscreteChart';
import MeasureRow from './chart/MeasureRow';
import PatientFilter from './patientFilter';
import { fetchPatient } from '../../../api/requests';

const PatientPage = () => {
    const[patient, setPatient] = useState({"name":"",
                                           "low":[],
                                           "midlow":[],
                                           "midhigh":[],
                                           "high":[],
                                           "frequencys":[],
                                           "measures":[]});
    const[filter, setFilter] = useState({"from":"", "to":""});
    const[state, setState] = useState(useLocation());

    async function getPatient() {
        var patient = await fetchPatient();
        return patient.data;
    }

    useEffect(() => {
        async function fetch() {
            const x = await getPatient(state.id, filter["from"], filter["to"]);
            setPatient(patient => ({...patient, x}))
        }
        fetch()
        console.log("useEffect")
    }, [state, filter]);

    useEffect(() => {
        console.log("usePatient")
    }, [patient])

    function handleFilter(event) {
        async function fetch() {
            const x = await getPatient(state.id, event.target[0].value, event.target[1].value);
            setPatient(x)
        }
        fetch()
        console.log("filter")
        //setFilter({"from":event.target[0].value, "to":event.target[1].value})
    }

    function handlePdf() {
        
    }

    const measuresList = patient.measures.map(({ date, ocasion, glicemy, insulin }) => {
        return (
            <MeasureRow
                date = {date}
                ocasion = {ocasion}
                glicemy = {glicemy}
                insulin = {insulin}
            />
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
                            <PatientFilter filter={filter} handleFilter={handleFilter} />
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
                    <Button variant="secondary" style={{padding:"10px", float:"right"}}>Exportar para PDF <i className="feather icon-upload" style={{margin:"0 0 0 10px"}}/></Button>
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
