import ExamineRouter from './MainRoutes/ExamineRouter';
import MainRouter from './MainRoutes/MainRouter';
import ManagersRouter from './MainRoutes/ManagersRouter';
import QuestionsRouter from './MainRoutes/QuestionsRouter';
import UsersRouter from './MainRoutes/UsersRouter';
import AuthRouter from './LoginRoutes/AuthRouter';

function Routers() {
    return (
        <>
            <MainRouter />
            <UsersRouter />
            <ManagersRouter />
            <ExamineRouter />
            <QuestionsRouter />
        </>
    );
}

export default Routers;
