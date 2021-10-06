import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const SamplePage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <p class="new-patient-text">
                                Para se vincular a um novo paciente, informe-o seu código individual:
                            </p>
                            <p class="new-patient-code">
                                7A5b6T
                            </p>
                            <p class="new-patient-text">
                                O paciente deve inserir este código na tela "Meu Médico" da seção "Configurações" do aplicativo para que o vínculo seja realizado.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default SamplePage;
