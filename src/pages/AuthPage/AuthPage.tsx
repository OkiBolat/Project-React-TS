import React, { useState, useEffect } from 'react';
import Auth from './Auth/Auth';
import { createStore, createEvent } from 'effector'

import iconEye from '../../assets/images/closedEye.png';
import styles from './AuthPage.module.scss';

interface IAuthPageProps {
    children?: React.ReactNode;
}

const AuthPage: React.FC<IAuthPageProps> = (props) => {
    const [submitError, setSubmitError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email: string) => {
        return email.length > 0;
    };
    const validatePassword = (email: string) => {
        return email.length > 0;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(event.target)
        // login({ username, password })
    }

    return (
        <div className={styles.authPage}>
            <div className={styles.authPage_container}>
                <Auth
                    submitError={submitError}
                    validateEmail={validateEmail}
                    validatePassword={validatePassword}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    onAuth={handleSubmit}
                    passwordIcon={iconEye}
                    togglePasswordVisibility={() => { }}
                />
            </div>
        </div>
    );
};

export default AuthPage;
