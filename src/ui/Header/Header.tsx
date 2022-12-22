import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../features/auth/Login/model';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Button from '../Button';
import styles from './Header.module.scss';

interface IHeaderProps {
    children?: React.ReactNode;
    isAuth: boolean;
}

const navRoutes = [
    { path: '/examine', component: 'Проверка' },
    { path: '/users', component: 'Пользователи' },
    { path: '/managers', component: 'Менеджеры' },
    { path: '/questions', component: 'Вопросы' },
]

const Header: React.FC<IHeaderProps> = ({ isAuth = true, children }) => {
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
                {isAuth && (
                    <div className={styles.header_list}>
                        {navRoutes.map((item, index) => (
                            <NavLink
                                onClick={() => setActiveItem(index)}
                                key={index}
                                className={[
                                    styles.header_item,
                                    index === activeItem ? styles.active : '',
                                ].join(' ')}
                                to={item.path}
                            >{item.component}
                            </NavLink>
                        ))}
                    </div>
                )}
                <Button variant='primary' onClick={handleLogout}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </div>
        </div>
    );
};

export default Header;
