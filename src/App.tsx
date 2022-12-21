import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $loginState } from './screens/AuthPage/model';
import Header from './components/Header';
import AuthPage from './screens/AuthPage';
import MainPage from './screens/MainPage';
import authData from './mock/authData.json';

import './App.scss';

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
            {/* <Routes>
                <Route path='/' element= */}
                {authenticated ? <MainPage /> : <AuthPage />} 
                {/* /> */}
                {/* <Route path='/main' element={<MainPage />} />
                <Route path='/auth' element={<AuthPage />} /> */}
            {/* </Routes> */}
        </div>
    );
}

export default App;
