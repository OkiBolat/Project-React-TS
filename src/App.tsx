import React, { useEffect, useMemo, useState } from 'react';
import { useStore } from 'effector-react';
import { $isAuth, checkIsAuth } from './features/auth/Login/models/auth-model';
import Header from './ui/Header';
import AuthRouter from './screens/LoginRoutes/AuthRouter';
import Routers from './screens/Routers';
import './App.scss';

function App() {
    const isAuth = useStore($isAuth);
    checkIsAuth()
    return (
        <div className='App'>
            <Header />
            {!isAuth ?
                <AuthRouter /> :
                <Routers />}
        </div>
    );
}

export default App;
