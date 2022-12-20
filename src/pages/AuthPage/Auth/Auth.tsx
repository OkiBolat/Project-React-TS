import React, { useState } from 'react';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputValidate from '../../../components/InputValidate';
import styles from './Auth.module.scss';

interface IAuthProps {
    children?: React.ReactNode;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    onAuth: (e:any) => void;
    submitError?: string;
    validateEmail: (str: string) => boolean;
    validatePassword: (str: string) => boolean;
    passwordIcon: any;
    togglePasswordVisibility: () => void;
}

const Auth: React.FC<IAuthProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    onAuth,
    submitError = '',
    validateEmail,
    validatePassword,
    passwordIcon,
    togglePasswordVisibility,
}) => {

    return (
        <div className={styles.auth}>
            <Form onSubmit={onAuth}>
                <div className={styles.auth_title}>Вход</div>
                <InputValidate
                    inputName='email'
                    validateValue={validateEmail}
                    error='Некорректный e-mail'
                    label='E-mail'
                    value={email}
                    setValue={setEmail}
                />
                <InputValidate
                    inputName='password'
                    icon={passwordIcon}
                    onClickInputIcon={togglePasswordVisibility}
                    type='password'
                    validateValue={validatePassword}
                    error='Некорректный пароль'
                    label='Пароль'
                    value={password}
                    setValue={setPassword}
                />
                <p className={styles.auth_submit_error}>{submitError && submitError}</p>
                <p className={styles.auth_forgot_link}>Забыли пароль?</p>
                <Button
                    type="submit"
                    className={styles.additional_btn_class}
                    primary={false}
                    onClick={(e) => onAuth(e)}
                >
                    Войти
                </Button>
                <div className={styles.auth_signUp_block}>
                    <p className={styles.auth_signUp_text}>Нет аккаунта?</p>
                    <p className={styles.auth_signUp_link}>Зарегистрироваться</p>
                </div>
            </Form>
        </div>
    );
};

export default Auth;
