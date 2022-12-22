import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const QuestionsRouter = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Questions} element={<Examine />} />;
        </Routes>
    );
};

export default QuestionsRouter;
