import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const QuestionsRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.Questions} element={<Examine />} />;
        </Routes>
    );
};

export default QuestionsRouter;
