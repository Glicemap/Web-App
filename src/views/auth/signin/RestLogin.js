import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Alert } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from './../../../config/constant';
import { ACCOUNT_INITIALIZE } from './../../../store/actions';
import { useLoginCode } from '../../../contexts/LoginCode';

const RestLogin = ({ className, ...rest }) => {
    const dispatcher = useDispatch();
    const scriptedRef = useScriptRef();
    let history = useHistory();
    const { setLoginCode } = useLoginCode();

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Insira um e-mail válido').max(255).required('E-mail é um campo obrigatório'),
                    password: Yup.string().max(255).required('Senha é um campo obrigatório')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        var body = {
                            "login": values.email,
                            "password": values.password
                        }
                        axios({method: "post", url: `${API_SERVER}/login/`, data: body})
                        .then(function (response) {
                            console.log(response)
                            if (response.status === 200) {
                                console.log(response.data);
                                dispatcher({
                                    type: ACCOUNT_INITIALIZE,
                                    payload: { isLoggedIn: true, user: values.email, token: response.data }
                                });
                                if (scriptedRef.current) {
                                    setStatus({ success: true });
                                    setSubmitting(false);
                                }
                                setLoginCode(response.data);
                                history.push('/patient-list');
                            } else {
                                setStatus({ success: false });
                                setErrors({ submit: "Senha ou usuário incorretos" });
                                setSubmitting(false);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                            setStatus({ success: false });
                            setErrors({ submit: "Senha ou usuário incorretos" });
                            setSubmitting(false);
                        });
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                error={touched.email && errors.email}
                                label="Email Address"
                                placeholder="Endereço de E-mail"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="email"
                                value={values.email}
                            />
                            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                error={touched.password && errors.password}
                                label="Password"
                                placeholder="Senha"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                            />
                            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )}

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                >
                                    Entrar
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
            <hr />
        </React.Fragment>
    );
};

export default RestLogin;
