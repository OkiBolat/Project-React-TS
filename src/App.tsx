import React, { useEffect, useState } from 'react';
import Header from './ui/Header';
import authData from './mock/MOCK_AUTH_DATA.json';
import { useStore } from 'effector-react';
import { $loginState, checkTokenFx } from './features/auth/Login/model';
import MainRouter from './screens/MainRouter';
import AuthRouter from './screens/AuthRouter';
import UsersRouter from './screens/UsersRouter';
import ManagersRouter from './screens/ManagersRouter';
import ExamineRouter from './screens/ExamineRouter';
import './App.scss';
import QuestionsRouter from './screens/QuestionsRouter';
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate()
    const auth = useStore($loginState);
    console.log(auth);
    const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
        checkTokenFx()
        if (!auth?.isValid) {
            setIsAuth(false)
            navigate("/auth");
        } else {
            setIsAuth(true)
            navigate('/')
        }
    }, [auth]);

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
