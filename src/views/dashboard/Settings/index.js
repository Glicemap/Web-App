import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { fetchAllSettings, updateSettings, updatePassword } from '../../../api/requests';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useScriptRef from '../../../hooks/useScriptRef';
import { useHistory } from 'react-router-dom';

const FormsElements = () => {
    const [validated, setValidated] = useState(false);
    const [settings, setSettings] = useState([{"name": "", "email": "", "crm": ""}]);
    const [password, setPassword] = useState([{"oldPassword": "", "newPassword": ""}]);
    let history = useHistory();
    const scriptedRef = useScriptRef();

    useEffect(() => {
        async function fetch() {
            const x = await fetchAllSettings();
            setSettings(x)
        }
        fetch()
    }, []);

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
            <Formik
                initialValues={{
                    name: settings['name'],
                    email: settings['email'],
                    old_password: '',
                    password: '',
                    password_confirm: '',
                    crm: settings['CRM'],
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('E-mail inválido').max(255).required('O campo E-mail é obrigatório'),
                    name: Yup.string().max(255).required('O campo Nome é obrigatório').min(4, "O campo não deve ter menos que 4 caracteres"),
                    old_password: Yup.string().max(255),
                    password: Yup.string().max(255),
                    password_confirm: Yup.string().max(255).oneOf([Yup.ref('password'), null], 'A confirmação deve ser igual à senha digitada'),
                    crm: Yup.string()
                        .min(4, "O campo não deve ter menos que 4 caracteres")
                        .matches(/^[0-9]+$/, "O campo deve conter apenas dígitos")
                        .required("O campo CRM é obrigatório")
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        const updateResult = await updateSettings(values.crm, values.name, values.email);
                        if (!updateResult){
                            throw new Error();
                        }

                        if(values.old_password !== '' && values.password !== '' && values.password_confirm !== ''){
                            const updateResultPassword = await updatePassword(values.old_password, values.password);
                            if (!updateResultPassword){
                                alert("Senha não alterada, senha atual incorreta!")
                            }
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
                enableReinitialize={true}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <Card.Header>
                                    <Card.Title as="h5"><i className="feather icon-user"/> Dados Pessoais</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <form noValidate onSubmit={handleSubmit} className="form" >
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group mb-4">
                                                    <Form.Label>Email</Form.Label>
                                                    <input
                                                        className="form-control"
                                                        error={touched.email && errors.email}
                                                        label="Email Address"
                                                        placeholder={values.email}
                                                        name="email"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="email"
                                                        value={values.email}
                                                    />
                                                    {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <Form.Label>Nome</Form.Label>
                                                    <input
                                                        className="form-control"
                                                        error={touched.name && errors.name}
                                                        label="Name"
                                                        placeholder={values.name}
                                                        name="name"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="name"
                                                        value={values.name}
                                                    />
                                                    {touched.name && errors.name && <small className="text-danger form-text">{errors.name}</small>}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <Form.Label>CRM</Form.Label>
                                                    <input
                                                        className="form-control"
                                                        error={touched.crm && errors.crm}
                                                        label="CRM"
                                                        placeholder={values.crm}
                                                        name="CRM"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="text"
                                                        value={values.crm}
                                                        maxLength='10'
                                                    />
                                                    {touched.crm && errors.crm && <small className="text-danger form-text">{errors.crm}</small>}
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group mb-4">
                                                    <Form.Label>Senha Atual</Form.Label>
                                                    <input
                                                        className="form-control"
                                                        error={touched.old_password && errors.old_password}
                                                        label="OldPassword"
                                                        placeholder="Senha Atual"
                                                        name="old_password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="password"
                                                        value={values.old_password}
                                                    />
                                                    {touched.old_password && errors.old_password && <small className="text-danger form-text">{errors.old_password}</small>}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <Form.Label>Nova Senha</Form.Label>
                                                    <input
                                                        className="form-control"
                                                        error={touched.password && errors.password}
                                                        label="Password"
                                                        placeholder="Nova Senha"
                                                        name="password"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        type="password"
                                                        value={values.password}
                                                    />
                                                    {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
                                                </div>
                                                <div className="form-group mb-4">
                                                    <Form.Label>Confirme sua senha</Form.Label>
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
                                                <Row>
                                                    <Col md={8} />
                                                    <Col md={4}>
                                                        <Button
                                                            className="btn-block"
                                                            color="primary"
                                                            disabled={isSubmitting}
                                                            size="large"
                                                            type="submit"
                                                            variant="primary"
                                                            style={{float:"right",margin:"0"}}
                                                        >
                                                            Salvar
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
                
            </Formik>
        </React.Fragment>
    );
};

export default FormsElements;
