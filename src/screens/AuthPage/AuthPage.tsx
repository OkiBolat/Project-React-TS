import React, { useState, useEffect } from 'react';
import AuthForm from '../../components/features/AuthForm';
import { useStore } from 'effector-react';
import { login, $loginState } from './model';
import { FormValues } from '../../assets/types/auth';
import { formValidate } from '../../assets/validators/formHelpers';
import styles from './AuthPage.module.scss';

interface IAuthPageProps {
    children?: React.ReactNode;
}

const AuthPage: React.FC<IAuthPageProps> = () => {
    const auth = useStore($loginState);
    const [submitError, setSubmitError] = useState<string|boolean>('')

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
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formValidate(formValues, setErrors)) {
            const { email, password } = formValues;
            login({ email, password });
        }
    };

    useEffect(() => {
        if(auth?.error) {
            setSubmitError(auth.error)
        }
    },[auth])

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

export default AuthPage;
