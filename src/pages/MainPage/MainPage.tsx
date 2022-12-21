import React from 'react';
import Header from '../../components/Header';
import Examine from './Examine';
import styles from './Main.module.css';

interface IMainProps {
    children?: React.ReactNode;
}

const MainPage: React.FC<IMainProps> = (props) => {
    return (
        <>
            <Header isAuth={true}></Header>
            <Examine />
        </>
    );
};

export default MainPage;