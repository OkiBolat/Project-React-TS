import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const ExamineRouter = () => {
    return (
        <Routes>
            <Route path={RoutesEnum.Examine} element={<Examine />} />;
        </Routes>
    );
};

export default ExamineRouter;
