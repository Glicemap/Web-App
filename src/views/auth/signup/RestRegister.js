import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Alert } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from './../../../config/constant';

const RestRegister = ({ className, ...rest }) => {
    let history = useHistory();
    const scriptedRef = useScriptRef();

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    password_confirm: '',
                    crm: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('E-mail inválido').max(255).required('O campo E-mail é obrigatório'),
                    username: Yup.string().required('O campo Nome é obrigatório'),
                    password: Yup.string().max(255).required('O campo Senha é obrigatório'),
                    password_confirm: Yup.string().max(255).required('O campo de Confirmação de Senha é obrigatório').oneOf([Yup.ref('password'), null], 'A confirmação deve ser igual à senha digitada'),
                    crm: Yup.string()
                        .min(4, "O campo não deve ter menos que 4 caracteres")
                        .matches(/^[0-9]+$/, "O campo deve conter apenas dígitos")
                        .required("O campo CRM é obrigatório")
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        var body = {
                            "name": values.username,
                            "password": values.password,
                            "email": values.email,
                            "CRM": values.crm
                        }
                        axios({method: "post", url: `${API_SERVER}/sign-up/`, data: body})
                        .then(function (response) {
                            if (response.status == 200) {
                                history.push('/auth/signin');
                            } else {
                                setStatus({ success: false });
                                setErrors({ submit: response.data.msg });
                                setSubmitting(false);
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                            setStatus({ success: false });
                            setErrors({ submit: error.response.data.msg });
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
                                error={touched.username && errors.username}
                                label="Username"
                                placeholder="Nome"
                                name="username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="name"
                                value={values.username}
                            />
                            {touched.username && errors.username && <small className="text-danger form-text">{errors.username}</small>}
                        </div>
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
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                error={touched.crm && errors.crm}
                                label="CRM"
                                placeholder="CRM"
                                name="crm"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.crm}
                                maxLength='10'
                            />
                            {touched.crm && errors.crm && <small className="text-danger form-text">{errors.crm}</small>}
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
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                error={touched.password_confirm && errors.password_confirm}
                                label="Password"
                                placeholder="Confirme sua senha"
                                name="password_confirm"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password_confirm}
                            />
                            {touched.password_confirm && errors.password_confirm && <small className="text-danger form-text">{errors.password_confirm}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )}

                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Salvar informações de login.
                            </label>
                        </div>

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
                                    Registrar
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

export default RestRegister;
