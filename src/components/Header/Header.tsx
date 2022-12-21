import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { logout } from '../../screens/AuthPage/model';
import Button from '../Button';
import styles from './Header.module.scss';

interface IHeaderProps {
    children?: React.ReactNode;
    isAuth: boolean;
}

 const navRoutes = [
      { path: '/examination', component: 'Проверка' },
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
                <div className={styles.header_logo}>
                    <img src={logo} alt='logo' />
                </div>
                {isAuth && (
                    <ul className={styles.header_list}>
                        {navRoutes.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveItem(index)}
                                className={[
                                    styles.header_item,
                                    index === activeItem ? styles.active : '',
                                ].join(' ')}
                            >
                                <Link to={item.path}>{item.component}</Link>
                            </li>
                        ))}
                    </ul>
                )}
                <Button variant='primary' onClick={handleLogout}>
                    {isAuth ? 'Выйти' : 'Войти'}
                </Button>
            </div>
        </div>
    );
};

export default Header;
