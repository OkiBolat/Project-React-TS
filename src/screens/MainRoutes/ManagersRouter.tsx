import { Route, Routes } from 'react-router-dom';
import { RouteName } from '../../libs/types/routes.enum';
import Examine from '../../features/main/Examine';

const ManagersRouter = () => {
    return (
        <Routes>
            <Route path={RouteName.Managers} element={<Examine />} />;
        </Routes>
    );
};

export default ManagersRouter;
