import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { $isAuth, logout } from '../../features/auth/Login/models/auth-model';
import { useStore } from 'effector-react';
import { routes } from '../../libs/constants/routes';
import logo from '../../assets/images/logo.svg';
import Button from '../Button';
import styles from './Header.module.scss';


const Header = () => {
    const currentPath = useLocation().pathname;
    const isAuth = useStore($isAuth);
    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/auth')
        logout();
    };
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <NavLink to={'/'}>
                    <div className={styles.header_logo}>
                        <img src={logo} alt='logo' />
                    </div>
                </NavLink>
                {isAuth && (
                    <div className={styles.header_list}>
                        {routes.map((item) => (
                            <NavLink
                                key={item.path}
                                className={[
                                    styles.header_item,
                                    currentPath === item.path ? styles.active : '',
                                ].join(' ')}
                                to={item.path}
                            >
                                {item.component}
                            </NavLink>
                        ))}
                    </div>
                )}
                <Button variant='primary' onClick={onLogout}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </div>
        </div>
    );
};

export default Header;
