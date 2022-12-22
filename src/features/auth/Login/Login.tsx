import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import { loginFx, $loginState } from './model';
import { FormValues } from '../../../libs/types/auth';
import { formValidate } from '../../../libs/validator';
import styles from './Login.module.scss';
import AuthForm from '../../../ui/AuthForm';

type LoginProps = {
    children?: React.ReactNode;
};

const Login: React.FC<LoginProps> = () => {
    const auth = useStore($loginState);
    const [submitError, setSubmitError] = useState<string | boolean>('');

    // Данные формы
    const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormValues>({ email: '', password: '' });

    //Обработчик инпутов
    const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formValidate(formValues, setErrors)) {
            const { email, password } = formValues;
            loginFx({ email, password })
        }
    };

    useEffect(() => {
        if (auth?.error) {
            setSubmitError(auth.error);
        }
    }, [auth]);

    return (
        <div className={styles.authPage}>
            <div className={styles.authPage_container}>
                <AuthForm
                    errors={errors}
                    submitError={submitError}
                    formValues={formValues}
                    onChangeInputs={onChangeInputs}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Login;
