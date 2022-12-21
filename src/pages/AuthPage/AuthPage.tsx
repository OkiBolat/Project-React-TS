import React, { useState, useEffect } from 'react';
import Auth from './Auth/Auth';
import { useStore } from 'effector-react';
import { login, $loginState } from './authStore'
import { FormValues, LoginData } from '../../assets/types/auth';
import { formValidate } from '../../assets/helpers/formHelpers';
import styles from './AuthPage.module.scss';

interface IAuthPageProps {
    children?: React.ReactNode;
}

const AuthPage: React.FC<IAuthPageProps> = () => {
    const auth = useStore($loginState);

    const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '', });
    const [errors, setErrors] = useState<FormValues>({ email: '', password: '', });

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true)
    
    const togglePasswordVisibility = () => setIsPasswordVisible(() => !isPasswordVisible)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const onSubmit = (values: FormValues) => {
        console.log(auth);
        const { email, password } = formValues;
        login({ email, password });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formValues)

        if (formValidate(formValues, setErrors)) {
            onSubmit(formValues);
        }
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.authPage_container}>
                <Auth
                    isPasswordVisible={isPasswordVisible}
                    errors={errors}
                    formValues={formValues}
                    handleChange={handleChange}
                    onAuth={handleSubmit}
                    togglePasswordVisibility={togglePasswordVisibility}
                />
            </div>
        </div>
    );
};

export default AuthPage;
