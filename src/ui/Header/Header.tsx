import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { $isAuth, logout } from '../../features/auth/Login/models/authModel';
import { useStore } from 'effector-react';
import { navLinks } from '../../libs/constants/routes';
import logo from '../../assets/images/logo.svg';
import Button from '../Button';
import styles from './Header.module.scss';
import { RoutesEnum } from '../../libs/types/routes.enum';
import classNames from 'classnames';

const Header = () => {
    const currentPath = useLocation().pathname;
    const isAuth = useStore($isAuth);
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/auth');
        logout();
    };
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <NavLink to={RoutesEnum.Main}>
                    <div className={styles.header_logo}>
                        <img src={logo} alt='logo' />
                    </div>
                </NavLink>
                {isAuth && (
                    <div className={styles.header_list}>
                        {navLinks.map((navLink) => (
                            <NavLink
                                key={navLink.path}
                                className={classNames(styles.header_item, {
                                    [styles.active]: currentPath === navLink.path,
                                })}
                                to={navLink.path}
                            >
                                {navLink.title}
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
