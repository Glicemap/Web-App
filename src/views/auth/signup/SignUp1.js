import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import RestRegister from './RestRegister';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import logo from '../../../assets/images/logo.svg';

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
                                    <img src={logo} className='b-title' alt="GLICEMAP"></img>

                                    <div className="mb-4" style={{"margin-top": "20px"}}>
                                        <i className="feather icon-user-plus auth-icon" />
                                    </div>

                                    <RestRegister />

                                    <p className="mb-2">
                                        Já tem um conta?{' '}
                                        <NavLink to="/auth/signin" className="f-w-400">
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
