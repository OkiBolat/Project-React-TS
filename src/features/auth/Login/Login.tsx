import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $errors, $formValues, $submitError, setFormValues } from './models/formModel';
import { login } from './models/authModel';
import PasswordInput from '../../../ui/PasswordInput';
import styles from './Login.module.scss';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
    const formValues = useStore($formValues);
    const errors = useStore($errors);
    const submitError = useStore($submitError);
    const currentPath = useLocation().pathname
    const title = currentPath === '/auth' ? 'Вход' : 'Регистрация'

    return (
        <div className={styles.form}>
            <form className={styles.form_wrp} onSubmit={login}>
                <div className={styles.form_title}>{title}</div>
                <Input
                    label='E-mail'
                    error={errors.email}
                    value={formValues.email}
                    onChange={setFormValues}
                    name='email'
                />
                <PasswordInput
                    label='Пароль'
                    error={errors.password}
                    value={formValues.password}
                    onChange={setFormValues}
                    name='password'
                />
                <p className={styles.form_submit_error}>{submitError && submitError}</p>
                <p className={styles.form_forgot_link}>Забыли пароль?</p>
                <Button
                    variant='secondary'
                    type='submit'
                    className={styles.additional_btn_class}
                    onClick={login}
                >
                    Войти
                </Button>
                <div className={styles.form_signUp_block}>
                    <p className={styles.form_signUp_text}>Нет аккаунта?</p>
                    <Link to={'/registration'} className={styles.form_signUp_link}>Зарегистрироваться</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
