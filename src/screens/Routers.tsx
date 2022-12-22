import ExamineRouter from './MainRoutes/ExamineRouter';
import MainRouter from './MainRoutes/MainRouter';
import ManagersRouter from './MainRoutes/ManagersRouter';
import QuestionsRouter from './MainRoutes/QuestionsRouter';
import UsersRouter from './MainRoutes/UsersRouter';

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
