import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getNewCode } from '../../../api/requests';



const Notifications = () => {
    const [code, setCode] = useState("");

    useEffect(() => {
        async function fetch() {
            console.log(`a ${newCode}`);
            var newCode = await getNewCode();
            setCode(newCode);
        }
        fetch()
    }, []);

    async function handleNewCode() {
        const newCode = await getNewCode();
        await console.log(`b ${newCode}`);
        await setCode(newCode);
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
