import { createStore, createEvent, createEffect } from 'effector';
import { LoginResult, LoginData } from './../../assets/types/auth';

import authData from '../../utils/authData.json'
export const $loginState = createStore<LoginResult | null>(null);

export const login = createEvent<LoginData>();
export const logout = createEvent();

$loginState
  .on(login, ( state, { email, password }): LoginResult | null => {
      if (authData.email === email && authData.password === password) {
        localStorage.setItem('login', authData.token)
        return {
          token: authData.token,
          userId: authData.userId
        }
      }else {
        return null;
      }
  })
  .on(logout, () => {
    return null;
  })


// export const loginEffect = createEffect({
//   async handler({ email, password }: LoginData) {
//     // Имитация авторизации с проверкой данных из JSON-файла
//     if (email === authData.email && password === authData.password) {
//       return {
//         token: authData.token,
//         userId: authData.userId,
//       };
//     } else {
//       throw new Error('Invalid email or password');
//     }
//   },
// })



