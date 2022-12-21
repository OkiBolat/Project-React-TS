import React, { useEffect, useState } from 'react';
import Header from './ui/Header';
import authData from './mock/authData.json';
import './App.scss';
import { useStore } from 'effector-react';
import { $loginState } from './features/auth/Login/model';
import MainRouter from './screens/MainRouter';
import AuthRouter from './screens/AuthRouter';

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
            {authenticated ? <MainRouter /> : <AuthRouter />}
        </div>
    );
}

export default App;
