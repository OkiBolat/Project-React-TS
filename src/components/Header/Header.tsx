import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import Button from '../Button';
import styles from './Header.module.scss';

interface IHeaderProps {
  children?: React.ReactNode;
  isAuth: boolean
}

const list = [
  "Проверка",
  "Пользователи",
  "Менеджеры",
  "Вопросы",
]

const Header: React.FC<IHeaderProps> = ({ isAuth = true, children }) => {
  const [activeItem, setActiveItem] = useState(0)
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <img src={logo} alt="logo" />
        </div>
        {isAuth &&
          <ul className={styles.header_list}>
            {list.map((item, index) =>
              <li
                key={index}
                onClick={() => setActiveItem(index)}
                className={[styles.header_item, index === activeItem ? styles.active : ''].join(' ')}>
                {item}
              </li>)
            }
          </ul>
        }
        <Button primary={true} onClick={() => { }}>
          {isAuth ? "Выйти" : "Войти"}
        </Button>
      </div>
    </div>
  );
}

export default Header;
