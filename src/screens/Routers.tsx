import ExamineRouter from './ExamineRouter';
import MainRouter from './MainRouter';
import ManagersRouter from './ManagersRouter';
import QuestionsRouter from './QuestionsRouter';
import UsersRouter from './UsersRouter';
import AuthRouter from './AuthRouter';

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
