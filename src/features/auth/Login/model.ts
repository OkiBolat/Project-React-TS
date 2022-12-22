import { createStore, createEvent, createEffect } from 'effector';
import authApi from '../../../api/authApi';
import { LoginResult, LoginData } from '../../../libs/types/auth';
import authData from '../../../mock/MOCK_AUTH_DATA.json';

export const $loginState = createStore<LoginResult | null>(null);

export const logout = createEvent();

export const loginFx = createEffect<LoginData, LoginResult>({
    handler: ({ email, password }) => {
        return authApi.login(email, password).then((response) => {
            const { token } = response.data;
            localStorage.setItem('token', token);
            console.log(response);
            return { ...response.data };
        });
    },
});

export const checkTokenFx = createEffect({
    handler: () => {
        return authApi.checkToken().then((response) => {
            return response.data;
        });
    },
});

$loginState
    .on(loginFx.done, (_, { result }) => result)
    .on(checkTokenFx.done, (_, { result }) => result)
    .on(logout, () => null);
