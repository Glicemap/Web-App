import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import RestLogin from './RestLogin';

import logo from '../../../assets/images/logo.svg';

const Signin1 = () => {
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
                    <Card className="borderless text-center">
                        <Card.Body>
                            <img src={logo} className='b-title' alt="GLICEMAP"></img>

                            <div className="mb-4" style={{"margin-top": "20px"}}>
                                <i className="feather icon-unlock auth-icon" />
                            </div>

                            <RestLogin />

                            <p className="mb-0 text-muted">
                                Não tem uma conta?{' '}
                                <NavLink to="/auth/signup" className="f-w-400">
                                    Registre-se
                                </NavLink>
                            </p>

                            <br />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin1;
