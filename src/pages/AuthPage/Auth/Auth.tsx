import React, { useState } from 'react';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputValidate from '../../../components/InputValidate';
import hideIcon from '../../../assets/images/hide.png';
import viewIcon from '../../../assets/images/view.png';
import styles from './Auth.module.scss';
import { FormValues } from '../../../assets/types/auth';

interface IAuthProps {
    children?: React.ReactNode;
    onAuth: (e: any) => void;
    submitError?: string;
    formValues: FormValues;
    errors: FormValues;
    togglePasswordVisibility: () => void;
    isPasswordVisible: boolean;
    handleChange: (e: any) => void;
}

const Auth: React.FC<IAuthProps> = ({
    handleChange,
    errors,
    formValues,
    onAuth,
    togglePasswordVisibility,
    isPasswordVisible,
}) => {
    return (
        <div className={styles.auth}>
            <Form onSubmit={onAuth}>
                <div className={styles.auth_title}>Вход</div>
                <InputValidate
                    error={errors.email}
                    inputName='email'
                    label='E-mail'
                    value={formValues.email}
                    setValue={handleChange}
                />
                <InputValidate
                    type={!isPasswordVisible ? 'text' : 'password'}
                    error={errors.password}
                    inputName='password'
                    icon={!isPasswordVisible ? viewIcon : hideIcon}
                    onClickInputIcon={togglePasswordVisibility}
                    label='Пароль'
                    value={formValues.password}
                    setValue={handleChange}
                />
                {/* <p className={styles.auth_submit_error}>{submitError && submitError}</p> */}
                <p className={styles.auth_forgot_link}>Забыли пароль?</p>
                <Button
                    variant='secondary'
                    type='submit'
                    className={styles.additional_btn_class}
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
