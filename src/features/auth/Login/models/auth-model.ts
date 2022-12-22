import { createStore, createEvent } from 'effector';
import { formValidate } from '../../../../libs/validator';
import { $formValues, clearFormValues, setErrors, setFormValues, setSubmitError } from './form-model';
import authData from '../../../../mock/MOCK_AUTH_DATA.json';

export const $isAuth = createStore<boolean>(false);

export const logout = createEvent();
export const login = createEvent<React.FormEvent<HTMLFormElement>>();
export const checkIsAuth = createEvent();

$isAuth.
on(login, (_, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = $formValues?.getState()
    if (formValidate({ email, password }, setErrors)) {
        if (email === authData.email && password === authData.password) {
            localStorage.setItem('token', authData.token);
            return true
        } else {
            clearFormValues()
            setSubmitError('Неправильный логин или пароль');
            return false
        }
    } return
})
.on(checkIsAuth, () => localStorage.getItem('token') === authData.token ? true : false)
