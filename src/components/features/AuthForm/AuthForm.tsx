import React, { useState } from 'react';
import Button from '../../Button';
import Form from '../../Form';
import styles from './AuthForm.module.scss';
import { FormValues } from '../../../assets/types/auth';
import Input from '../../Input';
import PasswordInput from '../../PasswordInput/Input/PasswordInput';

interface IAuthProps {
    children?: React.ReactNode;
    onSubmit: (e: any) => void;
    submitError?: string | boolean;
    formValues: FormValues;
    errors: FormValues;
    onChangeInputs: (e: any) => void;
}

const AuthForm: React.FC<IAuthProps> = ({
    onChangeInputs,
    errors,
    formValues,
    onSubmit,
    submitError
}) => {
    return (
        <div className={styles.auth}>
            <Form onSubmit={onSubmit}>
                <div className={styles.auth_title}>Вход</div>
                <Input
                    label='E-mail'
                    inputName='email'
                    error={errors.email}
                    value={formValues.email}
                    onChange={onChangeInputs}
                />
                <PasswordInput
                    label='Пароль'
                    error={errors.password}
                    value={formValues.password}
                    onChange={onChangeInputs}
                />
                <p className={styles.auth_submit_error}>{submitError && submitError}</p>
                <p className={styles.auth_forgot_link}>Забыли пароль?</p>
                <Button
                    variant='secondary'
                    type='submit'
                    className={styles.additional_btn_class}
                    onClick={(e) => onSubmit(e)}
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

export default AuthForm;
