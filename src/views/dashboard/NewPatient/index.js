import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getNewCode } from '../../../api/requests';
import { useLoginCode } from '../../../contexts/LoginCode';



const Notifications = () => {
    const [code, setCode] = useState("Gerar Novo");
    const { loginCode } = useLoginCode();

    async function handleNewCode() {
        const newCode = await getNewCode(loginCode);
        await setCode(newCode);
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
