import { LoginData, LoginResult } from '../assets/types/auth';

export async function login(data: LoginData): Promise<LoginResult> {
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
}
