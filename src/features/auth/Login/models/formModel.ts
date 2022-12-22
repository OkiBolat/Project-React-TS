import { createEvent, createStore } from 'effector';
import { FormValues } from '../../../../libs/types/auth';

export const $formValues = createStore<FormValues>({ email: '', password: '' });
export const $errors = createStore<FormValues>({ email: '', password: '' });
export const $submitError = createStore<string | boolean>('');

export const setFormValues = createEvent<React.ChangeEvent<HTMLFormElement>>();
export const clearFormValues = createEvent();
export const setErrors = createEvent<FormValues>();
export const setSubmitError = createEvent<string | boolean>();

$errors.on(setErrors, (_, payload) => payload);
$submitError.on(setSubmitError, (state, payload) => payload);

$formValues
    .on(setFormValues, (state, payload) => {
        const { name, value } = payload.target;
        return {
            ...state,
            [name]: value,
        };
    })
    .on(clearFormValues, () => ({ email: '', password: '' }));
