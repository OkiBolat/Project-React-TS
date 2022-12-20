import React from 'react';
import Header from '../../components/Header';
import styles from './AuthPage.module.css';

interface IAuthPageProps {
  children?: React.ReactNode;
}

const AuthPage:React.FC<IAuthPageProps> = (props) => {
  return (
    <>
    <Header isAuth={true}/>
    </>
  );
}

export default AuthPage;
