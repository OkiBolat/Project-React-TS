import React, { useEffect, useState } from 'react';
import Header from './ui/Header';
import authData from './mock/MOCK_AUTH_DATA.json';
import { useStore } from 'effector-react';
import { $loginState } from './features/auth/Login/model';
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
    console.log(auth?.token)


    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const token = auth?.token;
        if (token !== authData.token) {
            navigate("/auth");
        }else {
            navigate('/')
        }
    }, [auth]);

    return (
        <div className='App'>
            <Header isAuth={true} />
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
