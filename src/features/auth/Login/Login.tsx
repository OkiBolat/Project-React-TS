import React from 'react';
import { useStore } from 'effector-react';
import { $errors, $formValues, $submitError, setFormValues } from './models/form-model';
import { login } from './models/auth-model';
import PasswordInput from '../../../ui/PasswordInput';
import styles from './Login.module.scss';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';


const Login = () => {
    const formValues = useStore($formValues);
    const errors = useStore($errors);
    const submitError = useStore($submitError);

    return (
        <div className={styles.authPage}>
            <div className={styles.authPage_container}>
                <div className={styles.form}>
                    <form className={styles.form_wrp} onSubmit={login}>
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
                            onClick={login}
                        >
                            Войти
                        </Button>
                        <div className={styles.form_signUp_block}>
                            <p className={styles.form_signUp_text}>Нет аккаунта?</p>
                            <p className={styles.form_signUp_link}>Зарегистрироваться</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
