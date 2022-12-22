import React from 'react';
import Input from '../../Input';
import styles from './AuthForm.module.scss';
import Button from '../../Button';
import PasswordInput from '../../PasswordInput';
import { FormValues } from '../../../libs/types/auth';
import { setFormValues } from '../../../features/auth/Login/model';

interface IFormProps {
    children?: React.ReactNode;
    onSubmit: (e: any) => void;
    submitError?: string | boolean;
    formValues: FormValues;
    errors: FormValues;
    onChangeInputs?: (e: any) => void;
}

const AuthForm: React.FC<IFormProps> = ({ errors, formValues, onSubmit, submitError }) => {
    return (
        <div className={styles.form}>
            <form className={styles.form_wrp} onSubmit={onSubmit}>
                <div className={styles.form_title}>Вход</div>
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

export default AuthForm;