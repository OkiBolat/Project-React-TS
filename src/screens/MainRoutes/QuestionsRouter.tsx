import { Route, Routes } from 'react-router-dom';
import Examine from '../../features/main/Examine';

const QuestionsRouter = () => {
    return (
        <Routes>
            <Route path={'/questions'} element={<Examine/>} />;
        </Routes>
    );
};

export default QuestionsRouter;
