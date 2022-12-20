import React, { useState } from 'react';
import Header from '../../components/Header';
import Auth from './Auth/Auth';
import styles from './AuthPage.module.scss';

interface IAuthPageProps {
  children?: React.ReactNode;
}

const AuthPage: React.FC<IAuthPageProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onAuth = () => {

  };

  return (
    <div className={styles.authPage}>
      <Header isAuth={true} />
      <div className={styles.authPage_container}>
        <Auth
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onAuth={onAuth}
        />
      </div>
    </div>
  );
}

export default AuthPage;
