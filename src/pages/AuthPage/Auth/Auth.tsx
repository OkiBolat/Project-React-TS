import React, { useState } from 'react';
import Button from '../../../components/Button';
import InputValidate from '../../../components/InputValidate';
import styles from './Auth.module.scss';

interface IAuthProps {
  children?: React.ReactNode;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onAuth: () => void;
}

const Auth: React.FC<IAuthProps> = ({ email, setEmail, password, setPassword, onAuth }) => {

  return (
    <div className={styles.auth}>
      <InputValidate label='E-mail' value={email} setValue={setEmail} />
      <InputValidate label='Пароль' value={password} setValue={setPassword} />
      <p className={styles.auth_forgot_link}>
        Забыли пароль?
      </p>
      <Button className={styles.additional_btn_class} primary={false} onClick={() => onAuth()}>
        Войти
      </Button>
      <div className={styles.auth_signUp_block}>
        <p className={styles.auth_signUp_text}>Нет аккаунта?</p>
        <p className={styles.auth_signUp_link}>
          Зарегистрироваться
        </p>
      </div>
    </div>
  );
}

export default Auth;
