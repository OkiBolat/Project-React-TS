import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $isAuth, checkIsAuth } from './features/auth/Login/models/authModel';
import { useNavigate } from 'react-router-dom';
import Header from './ui/Header';
import AuthRouter from './screens/LoginRoutes/AuthRouter';
import Routers from './screens/Routers';
import './App.scss';
import { RoutesEnum } from './libs/types/routes.enum';

function App() {
    const isAuth = useStore($isAuth);
    const history = useNavigate();

    useEffect(() => {
        isAuth && history(RoutesEnum.Main);
    }, [isAuth]);

    return (
        <div className='app'>
            <Header />
            {!isAuth ? <AuthRouter /> : <Routers />}
        </div>
    );
}

export default App;
