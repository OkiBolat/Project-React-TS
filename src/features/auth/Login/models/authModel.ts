import { createStore, createEvent } from 'effector';
import { formValidate } from '../../../../libs/validator';
import { $formValues, clearFormValues, setFormErrors, setFormSubmitError } from './formModel';
import authData from '../../../../mock/MOCK_AUTH_DATA.json';

export const $isAuth = createStore<boolean>(false);

export const logout = createEvent();
export const login = createEvent<React.FormEvent<HTMLFormElement>>();
export const checkIsAuth = createEvent();

$isAuth
    .on(login, (_, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = $formValues.getState();
        const isCorrectData = email === authData.email && password === authData.password;
        const errors = formValidate({ email, password });
        setFormErrors(errors);
        if (Object.values(errors).every((error) => !error)) {
            if (isCorrectData) {
                setFormSubmitError('')
                localStorage.setItem('token', authData.token);
                clearFormValues()
                return true;
            }
            setFormSubmitError('Неправильный логин или пароль');
            return false;
        }
    })
    .on(checkIsAuth, () => (localStorage.getItem('token') === authData.token ? true : false))
    .on(logout, () => {
        localStorage.removeItem('token');
        return false;
    });

