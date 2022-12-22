import React, { useEffect, useMemo, useState } from 'react';
import { useStore } from 'effector-react';
import { $isAuth } from './features/auth/Login/model';
import Header from './ui/Header';
import AuthRouter from './screens/LoginRoutes/AuthRouter';
import Routers from './screens/Routers';
import './App.scss';

function App() {
    const isAuth = useStore($isAuth);

    return (
        <div className='App'>
            <Header />
            <AuthRouter />
            {/* <Routers /> */}
        </div>
    );
}

export default App;
