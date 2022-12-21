import React, { useState } from 'react';
import Button from '../../../../ui/Button';
import Form from '../../../../ui/Form';
import InputValidate from '../../../../ui/InputValidate';
import hideIcon from '../../../../assets/images/hide.png';
import viewIcon from '../../../../assets/images/view.png';
import styles from './Auth.module.scss';
import { FormValues } from '../../../../libs/types/auth';

type AuthProps = {
    children?: React.ReactNode;
    onAuth: (e: any) => void;
    submitError?: string | boolean;
    formValues: FormValues;
    errors: FormValues;
    togglePasswordVisibility: () => void;
    isPasswordVisible: boolean;
    handleChange: (e: any) => void;
};

const Auth: React.FC<AuthProps> = ({
    handleChange,
    errors,
    formValues,
    onAuth,
    togglePasswordVisibility,
    isPasswordVisible,
    submitError,
}) => {
    return (
        <div className={styles.auth}>
            <Form onSubmit={onAuth}>
                <div className={styles.auth_title}>Вход</div>
                <InputValidate
                    label='E-mail'
                    error={errors.email}
                    inputName='email'
                    value={formValues.email}
                    setValue={handleChange}
                />
                <InputValidate
                    label='Пароль'
                    type={!isPasswordVisible ? 'text' : 'password'}
                    error={errors.password}
                    inputName='password'
                    icon={!isPasswordVisible ? viewIcon : hideIcon}
                    onClickInputIcon={togglePasswordVisibility}
                    value={formValues.password}
                    setValue={handleChange}
                />
                <p className={styles.auth_submit_error}>{submitError && submitError}</p>
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
