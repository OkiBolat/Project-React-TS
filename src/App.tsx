import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import authData from './utils/authData.json';
import './App.scss';
import { useStore } from 'effector-react';
import { $loginState } from './pages/AuthPage/model';

function App() {
    const auth = useStore($loginState);

    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const token = auth?.token;
        if (token === authData.token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [auth]);

    return (
        <div className='App'>
            <Header isAuth={authenticated} />
            {authenticated ? <MainPage /> : <AuthPage />}
        </div>
    );
}

export default App;
