import React, { useState } from 'react';
import { NavLink, redirect } from 'react-router-dom';
import { $isAuth, logout } from '../../features/auth/Login/model';
import logo from '../../assets/images/logo.svg';
import Button from '../Button';
import styles from './Header.module.scss';
import { useStore } from 'effector-react';
import { routes } from '../../libs/constants/routes';

const Header = () => {
    const isAuth = useStore($isAuth);
    const [activeItem, setActiveItem] = useState(0);

    const handleLogout = () => {
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
                {!isAuth && (
                    <div className={styles.header_list}>
                        {routes.map((item, index) => (
                            <NavLink
                                onClick={() => setActiveItem(index)}
                                key={item.path}
                                className={[
                                    styles.header_item,
                                    index === activeItem ? styles.active : '',
                                ].join(' ')}
                                to={item.path}
                            >
                                {item.component}
                            </NavLink>
                        ))}
                    </div>
                )}
                <Button variant='primary' onClick={handleLogout}>
                    {!isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </div>
        </div>
    );
};

export default Header;
