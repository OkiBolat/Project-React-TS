import authData from '../mock/MOCK_AUTH_DATA.json'

export default {
    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            // Имитируем задержку запроса
            setTimeout(() => {
                if (email === authData.email && password === authData.password) {
                    resolve({
                        data: {
                            token: authData.token,
                            userId: authData.userId,
                        },
                    });
                } else {
                    reject(new Error('Неверный логин или пароль'));
                }
            }, 0);
        });
    },
    checkToken(): Promise<any> {
        return new Promise((resolve, reject) => {
            // Имитируем задержку запроса
            setTimeout(() => {
                if (localStorage.getItem('token') === authData.token) {
                    resolve({
                        data: {
                            token: authData.token,
                            userId: authData.userId,
                            isValid: true,
                        },
                    });
                } else {
                    reject(new Error('Неверный токен'));
                }
            }, 1000);
        });
    },
};