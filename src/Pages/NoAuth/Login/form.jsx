import React, { useEffect, useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
const useStyles = makeStyles({
    card: {
        minWidth: 275,
        padding: '3rem',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
function LoginContent({ form }) {
    const Context = useContext(AuthContext)
    const { handleSubmit, handleChange } = useContext(AuthContext);
    const { user, password } = Context

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

    useEffect(() => {
        form.setFieldsValue({
            username: user,
            password: password
        })
    }, form)

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    const changeInput = (e, value) => {
        handleChange(value, e.target.value)

    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.card}>

            <Form className="login-form" layout='horizontal'>

                <Form.Item style={{ textAlign: 'center !important' }} label="Usuario" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Por favor ingrese su usuario!' }],
                    })(
                        <Input
                            onChange={e => changeInput(e, 'username')}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Contraseña" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Por favor ingrese su contraseña!' }],
                    })(
                        <Input
                            onChange={e => changeInput(e, 'password')}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: ' stretch', margin: '-1.8em 0px 1em' }}>

                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Recordar</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Se te olvidó tu contraseña
          </a></div>

                    <div>
                        <Button type="primary" htmlType="submit" block className="login-form-button" onClick={handleSubmit}>
                            Iniciar Sesión
                        </Button>
                    </div>
                    Ó <a href="">Registrate ahora!</a>

                </Form.Item>
            </Form>
        </Card>
    )
}
const WrappedHorizontalLoginForm = Form.create({ name: 'LoginContent' })(LoginContent);

export default WrappedHorizontalLoginForm