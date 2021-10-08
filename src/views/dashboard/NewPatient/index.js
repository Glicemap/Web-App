import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getNewCode, fetchAllUsers } from '../../../api/requests';



const Notifications = () => {
    const [code, setCode] = useState("7A5b6T");

    async function handleNewCode() {
        var newCode = await getNewCode();
        setCode(newCode.data.code);
        return;
    }

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <p className="new-patient-text">
                                Para se vincular a um novo paciente, informe-o seu código individual (clique no código para gerar um novo):
                            </p>
                            <Button variant="primary" className="new-patient-code" onClick={() => handleNewCode()}>
                                {code}
                            </Button>
                            <p className="new-patient-text">
                                O paciente deve inserir este código na tela "Meu Médico" da seção "Configurações" do aplicativo para que o vínculo seja realizado.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Notifications;
