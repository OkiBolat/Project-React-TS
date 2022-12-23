import { FormValues } from './types/auth';

export const formValidate = (formValues: FormValues): FormValues => {
    const newErrors: FormValues = {
        name: '',
        email: '',
        password: '',
    };

    if (!formValues.email) {
        newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        newErrors.email = 'Некорректный email';
    }

    if (!formValues.password) {
        newErrors.password = 'Пароль обязателен';
    }

    return newErrors;
};
