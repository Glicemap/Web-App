import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { fetchAllSettings } from '../../../api/requests';

const FormsElements = () => {
    const [validated, setValidated] = useState(false);
    const [settings, setSettings] = useState([{"name": "Marco Aurélio", "email": "marco.aurelio@usp.br", "crm": "4206969"}]);
    const [password, setPassword] = useState([]);
    const [message, setMessage] = useState([]);


    /*useEffect(() => {
        setSettings(getSettings());
    }, []);

    async function getSettings() {
        var fullList = await fetchAllSettings();
        return fullList.data;
    }*/

    function handleSubmit(event) {
        const form = event.currentTarget;
        console.log(event)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    function handleChange(event) {
        let newSetting = {...settings};
        newSetting[0][event.target.name] = event.target.value;
        setSettings(newSetting);
    }

    function newPassword(event) {
        let pass = {...password};
        pass[event.target.name] = event.target.value;
        setPassword(pass);
    }

    function checkPassword(event) {
        let pass = {...password};
        let valid = false;
        if (pass['new'] === event.target.value) {
            valid = true;
        } else {
            valid = false;
        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5"><i className="feather icon-user"/> Dados Pessoais</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name="email" placeholder={settings[0].email} onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nome</Form.Label>
                                            <Form.Control type="text" name="name" placeholder={settings[0].name} onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>CRM</Form.Label>
                                            <Form.Control type="number" name="crm" placeholder={settings[0].crm} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Senha Atual</Form.Label>
                                            <Form.Control type="password" name="old" placeholder="Digite sua senha atual" onChange={newPassword} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Nova Senha</Form.Label>
                                            <Form.Control type="password" name="new" placeholder="Digite sua nova senha" onChange={newPassword} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirme a Nova Senha</Form.Label>
                                            <Form.Control type="password" name="confirm" placeholder="Confirme sua nova senha" onChange={checkPassword} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" style={{float:"right", margin:"0"}}>Salvar</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsElements;
