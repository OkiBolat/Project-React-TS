import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import {
    loginFx,
    $loginState,
    $formValues,
    $errors,
    $submitError,
    setFormValues,
    setErrors,
    setSubmitError,
} from './model';
import { formValidate } from '../../../libs/validator';
import styles from './Login.module.scss';
import AuthForm from '../../../ui/AuthForm';

type LoginProps = {
    children?: React.ReactNode;
};

const Login: React.FC<LoginProps> = () => {
    const auth = useStore($loginState);
    const formValues = useStore($formValues);
    const errors = useStore($errors);
    const submitError = useStore($submitError);

    //Обработчик инпутов
    const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Submit
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(errors);
        event.preventDefault();
        if (formValidate(formValues, setErrors)) {
            const { email, password } = formValues;
            loginFx({ email, password });
        }
    };
    useEffect(() => {
        console.log(submitError);
        if (auth?.error) {
            setSubmitError(auth.error);
        }
    }, []);

    return (
        <div className={styles.authPage}>
            <div className={styles.authPage_container}>
                <AuthForm
                    errors={errors}
                    submitError={submitError}
                    formValues={formValues}
                    onChangeInputs={onChangeInputs}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    );
};

export default Login;
