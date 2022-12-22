import { createStore, createEvent, createEffect } from 'effector';
import authApi from '../../../api/authApi';
import { LoginResult, LoginData, FormValues } from '../../../libs/types/auth';
import authData from '../../../mock/MOCK_AUTH_DATA.json';

//Stores
export const $loginState = createStore<LoginResult | null>(null);
export const $formValues = createStore<FormValues>({ email: '', password: '' });
export const $errors = createStore<FormValues>({ email: '', password: '' });
export const $submitError = createStore<string | boolean>('');
export const $isAuth = createStore<boolean>(false);

//Events
export const setFormValues = createEvent<FormValues>();
export const setErrors = createEvent<FormValues>();
export const setSubmitError = createEvent<string | boolean>();
export const setAuth = createEvent<boolean>();
export const logout = createEvent();

//Effects
export const loginFx = createEffect<LoginData, LoginResult>({
    handler: ({ email, password }) => {
        return authApi
            .login(email, password)
            .then((response) => {
                const { token } = response.data;
                localStorage.setItem('token', token);
                setAuth(true);
                return response.data;
            })
            .catch(() => setSubmitError('Неправильный логин или пароль'));
    },
});
export const checkTokenFx = createEffect({
    handler: () => {
        return authApi.checkToken().then((response) => {
            return response.data;
        });
    },
});

$formValues.on(setFormValues, (state, payload) => payload);
$errors.on(setErrors, (state, payload) => payload);
$submitError.on(setSubmitError, (state, payload) => payload);
$isAuth.on(setAuth, (state, payload) => payload);

$loginState
    .on(loginFx.done, (_, { result }) => result)
    .on(checkTokenFx.done, (_, { result }) => result)
    .on(logout, () => {
        localStorage.removeItem('token');
        return null;
    });
