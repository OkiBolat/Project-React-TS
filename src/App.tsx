import React, { useEffect, useState } from 'react';
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


function App() {
    const navigate = useNavigate();

    const auth = useStore($loginState);

    const [isAuth, setIsAuth] = useState<boolean>(!auth?.isValid);

    useEffect(() => {
        checkTokenFx();
        if (isAuth) {
            navigate('/auth');
        } else {
            navigate('/');
        }
    }, []);

    return (
        <div className='App'>
            <Header isAuth={isAuth} />
            <AuthRouter />
            <MainRouter />
            <UsersRouter />
            <ManagersRouter />
            <ExamineRouter />
            <QuestionsRouter />
        </div>
    );
}

export default App;
