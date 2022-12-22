import React, { useEffect, useMemo, useState } from 'react';
import Header from './ui/Header';
import { useStore } from 'effector-react';
import { $loginState, checkTokenFx } from './features/auth/Login/model';
import MainRouter from './screens/MainRouter';
import AuthRouter from './screens/AuthRouter';
import UsersRouter from './screens/UsersRouter';
import ManagersRouter from './screens/ManagersRouter';
import ExamineRouter from './screens/ExamineRouter';
import QuestionsRouter from './screens/QuestionsRouter';
import { useNavigate } from 'react-router-dom';
import './App.scss';
import Routers from './screens/Routers';

function App() {
    const navigate = useNavigate();
    const auth = useStore($loginState);
    const [isAuth, setIsAuth] = useState<boolean>(auth?.isValid || false);

    useEffect(() => {
        checkTokenFx();
        if (!auth?.isValid) {
            setIsAuth(false);
            navigate('/auth');
        } else {
            setIsAuth(true);
            navigate('/');
        }
    }, [auth?.isValid]);

    const HeaderMemo = useMemo(() => <Header isAuth={isAuth} />, [isAuth]);

    return (
        <div className='App'>
            {HeaderMemo}
            <AuthRouter />
            <Routers />
        </div>
    );
}

export default App;
