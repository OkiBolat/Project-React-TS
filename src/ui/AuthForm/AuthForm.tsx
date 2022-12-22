import React, { useState } from 'react';
import styles from './AuthForm.module.scss';
import Button from '../Button';
import Input from '../Input';
import { FormValues } from '../../libs/types/auth';
import PasswordInput from '../PasswordInput';

interface IFormProps {
    children?: React.ReactNode;
    onSubmit: (e: any) => void;
    submitError?: string | boolean;
    formValues: FormValues;
    errors: FormValues;
    onChangeInputs: (e: any) => void;
}

const formForm: React.FC<IFormProps> = ({
    onChangeInputs,
    errors,
    formValues,
    onSubmit,
    submitError,
}) => {
    return (
        <div className={styles.form}>
            <form className={styles.form_wrp} onSubmit={onSubmit}>
                <div className={styles.form_title}>Вход</div>
                <Input
                    label='E-mail'
                    error={errors.email}
                    value={formValues.email}
                    onChange={onChangeInputs}
                    name='email'
                />
                <PasswordInput
                    label='Пароль'
                    error={errors.password}
                    value={formValues.password}
                    onChange={onChangeInputs}
                    name='password'
                />
                <p className={styles.form_submit_error}>{submitError && submitError}</p>
                <p className={styles.form_forgot_link}>Забыли пароль?</p>
                <Button
                    variant='secondary'
                    type='submit'
                    className={styles.additional_btn_class}
                    onClick={(e) => onSubmit(e)}
                >
                    Войти
                </Button>
                <div className={styles.form_signUp_block}>
                    <p className={styles.form_signUp_text}>Нет аккаунта?</p>
                    <p className={styles.form_signUp_link}>Зарегистрироваться</p>
                </div>
            </form>
        </div>
    );
};

export default formForm;
