import { createStore, createEvent, createEffect } from 'effector';
import { LoginResult, LoginData } from '../../assets/types/auth';

import authData from '../../utils/authData.json';
export const $loginState = createStore<LoginResult | null>(null);

export const login = createEvent<LoginData>();
export const logout = createEvent();

$loginState
    .on(login, (state, { email, password }): LoginResult | null => {
        if (authData.email === email && authData.password === password) {
            localStorage.setItem('login', authData.token);
            return {
                token: authData.token,
                userId: authData.userId,
            };
        } else {
            return {
                token: '',
                userId: '',
                error: 'Неверный логин или пароль'
            };
        }
    })
    .on(logout, () => {
        return null;
    });
