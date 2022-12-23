import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const ExamineRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.Examine} element={<Examine />} />;
        </Routes>
    );
};

export default ExamineRouter;
