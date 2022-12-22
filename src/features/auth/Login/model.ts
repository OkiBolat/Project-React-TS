import { createStore, createEvent } from 'effector';
import { FormValues } from '../../../libs/types/auth';
import authData from '../../../mock/MOCK_AUTH_DATA.json';

export const $isAuth = createStore<boolean>(false);
export const $formValues = createStore<FormValues>({ email: '', password: '' });
export const $errors = createStore<FormValues>({ email: '', password: '' });
export const $submitError = createStore<string | boolean>('');

export const setFormValues = createEvent<React.ChangeEvent<HTMLFormElement>>();
export const setErrors = createEvent<FormValues>();
export const setSubmitError = createEvent<string | boolean>();
export const setAuth = createEvent<boolean>();
export const logout = createEvent();
export const login = createEvent<FormValues>();

$errors.on(setErrors, (state, payload) => payload);
$submitError.on(setSubmitError, (state, payload) => payload);
$isAuth.on(setAuth, (state, payload) => payload);

$isAuth.on(login, (_, { email, password }: { email: string; password: string }) => {
    if (email === authData.email && password === authData.password) {
        localStorage.setItem('token', authData.token);
    } else {
        setSubmitError('Неправильный логин или пароль');
    }
});

$formValues.on(setFormValues, (state, payload) => {
    const { name, value } = payload.target;
    return {
        ...state,
        [name]: value,
    };
});
