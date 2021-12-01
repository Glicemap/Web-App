import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const SignUp1 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless">
                        <Row className="align-items-center">
                            <Col>
                                <Card.Body className="text-center">
                                    <div className="mb-4">
                                        <i className="feather icon-user-plus auth-icon" />
                                    </div>
                                    <h3 className="mb-4">Registro</h3>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Endereço de E-mail" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="CRM" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" className="form-control" placeholder="Senha" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" className="form-control" placeholder="Confirme sua senha" />
                                    </div>
                                    <button className="btn btn-primary mb-4">Registrar</button>
                                    <p className="mb-2">
                                        Já tem um conta?{' '}
                                        <NavLink to="/auth/signin-2" className="f-w-400">
                                            Login
                                        </NavLink>
                                    </p>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp1;
