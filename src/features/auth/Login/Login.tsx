import React, { useState, useEffect } from 'react';
import Auth from './Auth/Auth';
import { useStore } from 'effector-react';
import { login, $loginState } from './model';
import { FormValues } from '../../../libs/types/auth';
import { formValidate } from '../../../libs/validator';
import styles from './Login.module.scss';

type LoginProps = {
    children?: React.ReactNode;
};

const Login: React.FC<LoginProps> = () => {
    const auth = useStore($loginState);
    const [submitError, setSubmitError] = useState<string | boolean>('');

    // Данные формы
    const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormValues>({ email: '', password: '' });

    // Логика скрытия пароля
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
    const togglePasswordVisibility = () => setIsPasswordVisible(() => !isPasswordVisible);

    //Обработчик инпутов
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            login({ email, password });
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
                <Auth
                    isPasswordVisible={isPasswordVisible}
                    errors={errors}
                    submitError={submitError}
                    formValues={formValues}
                    handleChange={handleChange}
                    onAuth={handleSubmit}
                    togglePasswordVisibility={togglePasswordVisibility}
                />
            </div>
        </div>
    );
};

export default Login;
