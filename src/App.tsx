import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $isAuth, checkIsAuth } from './features/auth/Login/models/auth-model';
import { useNavigate } from 'react-router-dom';
import Header from './ui/Header';
import AuthRouter from './screens/LoginRoutes/AuthRouter';
import Routers from './screens/Routers';
import './App.scss';

function App() {
    const isAuth = useStore($isAuth);

    const history = useNavigate()

    useEffect(() => {
        checkIsAuth()
        if (!isAuth) {
            history('/auth')
        }else {
            history('/')
        }
    }, [isAuth])

    
    return (
        <div className='app'>
            <Header />
            {!isAuth ?
                <AuthRouter /> :
                <Routers />}
        </div>
    );
}

export default App;
